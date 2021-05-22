import { useState, useEffect } from "react";
import Image from "next/image";
import {
  PageContainer,
  MainContainer,
  FormContainer,
  PreviewContainer,
  TextInput,
  Label,
  Dropdown,
  Header,
  DownloadButton,
  CopyButton,
  ImageActionsContainer,
  PreviewImageContainer,
  SvgWithShadow,
  ContentContainer,
  Heading,
  Paragraph,
  FooterContainer,
  Link,
  CodeContainer,
  PreviewImageLoading
} from "../styles/mainPageStyle";
import { debounce } from "../utils/debounce";
import { copyToClipboard } from "../utils/copyToClipboard";

const initialState = {
  title: "Dynamic Open Graph Image Generator",
  author: "Sagar Hani",
  websiteUrl: "https://sagarhani.in",
  avatar: "https://avatars.githubusercontent.com/u/6933389",
  theme: "nightOwl"
};

export default function Home() {
  const [formData, setFormData] = useState(initialState);
  const [imageUrl, setImageUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isImageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageUrl(buildOgImageUrl(formData));
    setImageLoading(true);
  }, [formData]);

  const formChangeHandler = debounce(e => {
    const key = e.target.id as string;
    const { value } = e.target;
    setFormData({ ...formData, [key]: value });
  }, 500);

  const buildOgImageUrl = ({
    title,
    author,
    websiteUrl,
    avatar,
    theme
  }: OgImageContent) => {
    const url = new URL(process.env.NEXT_PUBLIC_APP_URL!);
    url.pathname = "/api/generate";
    url.searchParams.set("title", title);
    url.searchParams.set("author", author);
    url.searchParams.set("websiteUrl", websiteUrl);
    url.searchParams.set("avatar", avatar);
    url.searchParams.set("theme", theme);

    return url.toString();
  };

  const copyClickHandler = () => {
    copyToClipboard(imageUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  return (
    <PageContainer>
      <Header>Dynamic Open Graph Image Generator</Header>
      <MainContainer>
        <PreviewContainer>
          <PreviewImageContainer isLoading={isImageLoading}>
            <>
              {isImageLoading && (
                <PreviewImageLoading>
                  <span>Loading...</span>
                </PreviewImageLoading>
              )}
              {imageUrl && (
                <Image
                  priority
                  src={imageUrl}
                  width={600}
                  height={315}
                  onLoad={() => {
                    setImageLoading(false);
                  }}
                />
              )}
            </>
          </PreviewImageContainer>
          <ImageActionsContainer>
            <CopyButton onClick={copyClickHandler}>
              <SvgWithShadow src="./copy.svg" />
              <span>{copied ? "Copied !" : "Copy Image URL"}</span>
            </CopyButton>
            <DownloadButton href={imageUrl} download="og-image.jpeg">
              <SvgWithShadow src="./download.svg" />
              <span>Download Image</span>
            </DownloadButton>
          </ImageActionsContainer>
        </PreviewContainer>
        <FormContainer>
          <form onChange={formChangeHandler}>
            <div>
              <Label htmlFor="title">Title</Label>
              <TextInput id="title" defaultValue={initialState.title} />
            </div>
            <div>
              <Label htmlFor="author">Author</Label>
              <TextInput id="author" defaultValue={initialState.author} />
            </div>
            <div>
              <Label htmlFor="avatar">Image URL</Label>
              <TextInput id="avatar" defaultValue={initialState.avatar} />
            </div>
            <div>
              <Label htmlFor="websiteUrl">Website URL</Label>
              <TextInput
                id="websiteUrl"
                defaultValue={initialState.websiteUrl}
              />
            </div>
            <div>
              <Label htmlFor="theme">Theme</Label>
              <Dropdown id="theme" defaultValue={initialState.theme}>
                <option value="default">Default</option>
                <option value="nightOwl">Night Owl</option>
                <option value="github">Github</option>
                <option value="matrix">Matrix</option>
                <option value="dracula">Dracula</option>
                <option value="tinacious">Tinacious</option>
                <option value="shadesOfPurple">Shades of Purple</option>
              </Dropdown>
            </div>
          </form>
        </FormContainer>
      </MainContainer>
      <ContentContainer>
        <Heading>What is this ?</Heading>
        <Paragraph>
          This is a dynamic{" "}
          <Link href="https://ogp.me/" target="_blank">
            Open Graph
          </Link>{" "}
          image generator which generates the open graph image for your webpage
          dynamically.{" "}
        </Paragraph>
      </ContentContainer>
      <ContentContainer>
        <Heading>How to use it ?</Heading>
        <span>
          Add this url as a content to your{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#other_types_of_metadata"
            target="_blank"
          >
            og:property of meta tag
          </Link>{" "}
          as below :
        </span>
        <CodeContainer>
          <span>
            {`<meta property="og:image" content="http://localhost:3000/api/generate?title=`}
          </span>
          <span className="highlight">YOUR_TITLE</span>
          <span>&author=</span>
          <span className="highlight">AUTHOR_NAME</span>
          <span>&avatar=</span>
          <span className="highlight">IMAGE_URL</span>
          <span>&websiteUrl=</span>
          <span className="highlight">WEBSITE_URL</span>
          <span>&theme=</span>
          <span className="highlight">THEME_NAME</span>
          <span>{`" />`}</span>
        </CodeContainer>
        <span>
          and replace all <span className="highlight">VALUES</span> with your
          desired values.
        </span>
      </ContentContainer>
      <FooterContainer>Made with ❤️ using NextJS</FooterContainer>
    </PageContainer>
  );
}
