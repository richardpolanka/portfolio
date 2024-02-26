import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}

export default function ContactFormEmail({
    message, senderEmail
}:ContactFormEmailProps) {
  return (
      <html>
          <Head />
          <Preview>Nová zpráva z osobní stránky</Preview>
          <Tailwind>
              <Body className='bg-stone-100'>
                  <Container>
                      <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                          <Heading className='leading-tight'>
                              Obdržel jste tuto zprávu z kontaktního formuláře
                          </Heading>
                          <Text>{message}</Text>
                          <Hr />
                          <Text>Zprávu poslal {senderEmail}</Text>
                      </Section>
                  </Container>
              </Body>
          </Tailwind>
    </html>
  )
}
