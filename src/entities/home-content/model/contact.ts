export const CONTACT = {
  email: [18, 27, 0, 13, 88, 25, 75, 24, 95, 65, 92, 83, 88, 28, 6, 2, 37, 74, 6, 4, 16, 65, 28, 83, 93, 91],
  linkedinUrl: [27, 29, 0, 21, 94, 81, 74, 86, 90, 69, 71, 28, 90, 26, 7, 31, 0, 73, 2, 11, 87, 78, 93, 93, 29, 95, 29, 70, 21, 23, 89, 30, 23, 31, 94, 87, 31],
  linkedinText: [26, 7, 91, 4, 95, 31, 16, 11, 75, 65, 85],
  githubUrl: [27, 29, 0, 21, 94, 81, 74, 86, 74, 91, 68, 90, 67, 17, 71, 23, 10, 64, 68, 4, 11, 89, 71, 66, 84, 69, 22],
  githubText: [51, 8, 6, 17, 88, 25, 3, 10, 72],
  telegramUrl: [27, 29, 0, 21, 94, 81, 74, 86, 89, 28, 93, 87, 25, 18, 27, 0, 16, 95, 13, 22, 28],
  telegramText: [51, 8, 6, 17, 88, 25, 3, 10, 72],
  channelUrl: [27, 29, 0, 21, 94, 81, 74, 86, 89, 28, 93, 87, 25, 25, 26, 43, 4, 95, 31, 13, 12, 95],
  channelText: [7, 71, 25, 0, 2, 1, 22, 38, 76, 64, 68, 90, 67, 1],
} as const;

export const DIRECTORY = [
  { k: "Email", d: CONTACT.email, v: CONTACT.email, kind: "mail" },
  { k: "LinkedIn", d: CONTACT.linkedinUrl, v: CONTACT.linkedinText },
  { k: "GitHub", d: CONTACT.githubUrl, v: CONTACT.githubText },
  { k: "Telegram", d: CONTACT.telegramUrl, v: CONTACT.telegramText },
  { k: "Channel", d: CONTACT.channelUrl, v: CONTACT.channelText },
] as const;
