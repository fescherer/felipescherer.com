import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'
import { LucideAlertCircle, LucideBrainCog, LucideCheckCircle, LucideHeartHandshake, LucideHelpingHand, LucideListChecks, LucideMessageSquare, LucidePalette, LucideUserCheck, LucideUsers } from 'lucide-react'

export async function getSoftSkillsData(lang: Locale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary['soft-skills']

  return ([
    {
      icon: <LucideListChecks size={36} />,
      title: t.organized.title,
      text: t.organized.text,
    },
    {
      icon: <LucideCheckCircle size={36} />,
      title: t['problem-solving'].title,
      text: t['problem-solving'].text,
    },
    {
      icon: <LucideUsers size={36} />,
      title: t.collaboration.title,
      text: t.collaboration.text,
    },
    {
      icon: <LucideBrainCog size={36} />,
      title: t.adaptability.title,
      text: t.adaptability.text,
    },
    {
      icon: <LucideAlertCircle size={36} />,
      title: t.attention.title,
      text: t.attention.text,
    },
    {
      icon: <LucidePalette size={36} />,
      title: t.creativity.title,
      text: t.creativity.text,
    },
    {
      icon: <LucideHeartHandshake size={36} />,
      title: t.empathy.title,
      text: t.empathy.text,
    },
    {
      icon: <LucideHelpingHand size={36} />,
      title: t.teaching.title,
      text: t.teaching.text,
    },
    {
      icon: <LucideMessageSquare size={36} />,
      title: t['adaptability-feedback'].title,
      text: t['adaptability-feedback'].text,
    },
    {
      icon: <LucideUserCheck size={36} />,
      title: t.client.title,
      text: t.client.text,
    },
  ])
}
