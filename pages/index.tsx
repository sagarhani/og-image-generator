import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Container,
  FormContainer,
  PreviewContainer,
  TextInput,
  Label,
  Dropdown,
  Header,
  DownloadButton,
  CopyButton,
  ImageActionsContainer,
  PreviewImageContainer
} from "../styles/mainPageStyle";
import { debounce } from "../utils/debounce";

const initialState = {
  title: "Dynamic Open Graph Image Generator",
  author: "Sagar Hani",
  websiteUrl: "https://sagarhani.in",
  avatar: "https://avatars.githubusercontent.com/u/6933389?v=4",
  theme: "nightOwl"
};

export default function Home() {
  const [formData, setFormData] = useState(initialState);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(buildOgImageUrl(formData));
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

  return (
    <div>
      <Header>Open Graph Image Generator</Header>
      <Container>
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
              </Dropdown>
            </div>
          </form>
        </FormContainer>
        <PreviewContainer>
          {imageUrl && (
            <PreviewImageContainer>
              <Image src={imageUrl} width={600} height={315} />
            </PreviewImageContainer>
          )}
          <ImageActionsContainer>
            <CopyButton>
              <img src="./copy.svg" className="shadow" />
              <span>Copy Image URL</span>
            </CopyButton>
            <DownloadButton href={imageUrl} download="og-image.jpeg">
              <img src="./download.svg" className="shadow" />
              <span>Download Image</span>
            </DownloadButton>
          </ImageActionsContainer>
        </PreviewContainer>
      </Container>
    </div>
  );
}
