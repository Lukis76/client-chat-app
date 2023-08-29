'use client'

const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
}

const getSecondsDiff = (timestamp: any) => (Date.now() - timestamp) / 1000

type getUnitAndValueDate = (secondsElapsed: any) =>
  | {
      value: number
      unit: string
    }
  | undefined

const getUnitAndValueDate: getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }
}

const getTimeAgo = (timestamp: any, locale: string) => {
  const rtf = new Intl.RelativeTimeFormat(locale, { style: 'narrow' })

  const secondsElapsed = getSecondsDiff(timestamp)
  const { value, unit } = getUnitAndValueDate(secondsElapsed) as { value: number; unit: Intl.RelativeTimeFormatUnit & string }

  return rtf.format(value, unit)
}

type UseTimeAgo = ({ timestamp }: { timestamp: any }) =>
  | {
      dateTime: string
      timeago: string
    }
  | undefined

export const useTimeAgo: UseTimeAgo = ({ timestamp }) => {
  if (typeof window !== 'undefined') {
    const locale = 'en-US'
    const timeago = getTimeAgo(timestamp, locale)

    const date = new Date(timestamp)
    const formattedDate = new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
    }).format(date)

    return {
      dateTime: formattedDate,
      timeago,
    }
  }
  return undefined
}
