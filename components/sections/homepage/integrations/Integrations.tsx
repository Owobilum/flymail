import { FC } from 'react'
import { motion } from 'framer-motion'

import Container from '@/components/container'
import IntegrationCard from './IntegrationCard'
import AltIntegrationCard from './AltIntegrationCard'
import slackImg from '@/public/images/icons/slack.svg'
import tinderImg from '@/public/images/icons/tinder.svg'
import contentfulImg from '@/public/images/icons/contentful.svg'
import shopifyImg from '@/public/images/icons/shopify.svg'
import discordImg from '@/public/images/icons/discord.svg'
import mailchimpImg from '@/public/images/icons/mailchimp.svg'
import spotifyImg from '@/public/images/icons/spotify.svg'
import { fromBottomAnimation, opacityAnimation } from '@/utils/animations'

const Integrations: FC = () => (
  <Container className="bg-[#f9f9f9]">
    <section className="grid place-items-center py-5 lg:py-10">
      <motion.h2
        className=" max-w-[700px] text-center font-openSans text-3xl font-bold text-[#000320] lg:text-[3.325rem] 
        lg:leading-[3.75rem]"
        variants={fromBottomAnimation}
        initial="initial"
        whileInView="final"
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        Integrations To Supercharge Your Sales
      </motion.h2>
      <motion.p
        className="max-w-[700px] py-6 text-center font-lato text-[#5E5D5E] lg:py-8 lg:text-lg"
        variants={fromBottomAnimation}
        initial="initial"
        whileInView="final"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Integrates With Your Favorite Workplace Tools - No Need To Start From
        Scratch With Integrations, Make Your Company&apos;s Tools.
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-evenly gap-y-4 sm:justify-between"
        variants={opacityAnimation}
        initial="initial"
        whileInView="final"
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {integrationsData.map((integration, i) => (
          <IntegrationCard key={i} {...integration} />
        ))}
        <AltIntegrationCard
          title="75+"
          body="See what anther services integrates with"
        />
      </motion.div>
    </section>
  </Container>
)

export default Integrations

const integrationsData = [
  {
    title: 'slack',
    body: 'Streamline your Slack messages with the Slack integrations.',
    img: slackImg,
  },
  {
    title: 'spotify',
    body: 'Swedish audio streaming and media services provider.',
    img: spotifyImg,
  },
  {
    title: 'shopify',
    body: 'Canadian multinational proprietary e-commerce platform.',
    img: shopifyImg,
  },
  {
    title: 'contentful',
    body: ' API first content management platform',
    img: contentfulImg,
  },
  {
    title: 'discord',
    body: 'Streamline your Slack messages with the integrations.',
    img: discordImg,
  },
  {
    title: 'tinder',
    body: 'online dating and geosocial networking application.',
    img: tinderImg,
  },
  {
    title: 'mailchimp',
    body: 'Streamline your Slack messages with integrations.',
    img: mailchimpImg,
  },
]
