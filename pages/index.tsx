import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Container,
  FormContainer,
  PreviewContainer,
  TextInput
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
      <Head>
        <title>OG Image Generator</title>
        <meta name="description" content="OG Image Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <FormContainer>
          <form onChange={formChangeHandler}>
            <label htmlFor="title">Title</label>
            <TextInput id="title" defaultValue={initialState.title} />
            <label htmlFor="author">Author</label>
            <TextInput id="author" defaultValue={initialState.author} />
            <label htmlFor="avatar">Image URL</label>
            <TextInput id="avatar" defaultValue={initialState.avatar} />
            <label htmlFor="websiteUrl">Website URL</label>
            <TextInput id="websiteUrl" defaultValue={initialState.websiteUrl} />
            <label htmlFor="theme">Theme</label>
            <select id="theme" defaultValue={initialState.theme}>
              <option value="default">Default</option>
              <option value="nightOwl">Night Owl</option>
            </select>
            <a href={buildOgImageUrl(formData)} download="og-image.jpeg">
              download
            </a>
          </form>
        </FormContainer>
        <PreviewContainer>
          {imageUrl && <Image src={imageUrl} width={600} height={315} />}
        </PreviewContainer>
      </Container>
    </div>
  );
}
