import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

interface WelcomeEmailProps {
  userFirstname: string;
}

export const Email = ({ userFirstname = "Farid" }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans flex items-center'>
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]'>
            <Section className='mt-[32px]'>
              <Img
                src={`${baseUrl}/static/notion-logo.png`}
                width='90'
                height='90'
                alt='logo'
                className='my-0 mx-auto'
              />
            </Section>
            <Text className='text-lg'>Hi {userFirstname},</Text>
            <Text className='text-base leadding-7'>
              {
                "Thanks for signing up for Notion! We're excited to have you as a customer. There's just one last step before you can start using your account."
              }
            </Text>
            <Section className='text-center mt-[32px] mb-[32px]'>
              <Button
                pX={20}
                pY={12}
                className='bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center'
                href={"/"}
              >
                {"Join Notion"}
              </Button>
            </Section>
            <Text className='text-base leading-7'>
              {"Best,"}
              <br />
              {"The Notion team"}
            </Text>
            <Hr className='border-[#cccccc]' />
            <Text className='text-xs text-[#8898aa]'>
              {"©2023 Notion Technologies, LLC, a Salesforce company."}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
