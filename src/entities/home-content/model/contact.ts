export const CONTACT = {
  email: [0, 12, 26, 12, 66, 25, 37, 29, 72, 68, 85, 94, 89, 3, 12, 6, 75, 72, 19, 21, 28, 95, 70],
  linkedinUrl: [27, 29, 0, 21, 94, 81, 74, 86, 65, 91, 94, 89, 83, 23, 0, 26, 75, 78, 4, 8, 86, 68, 92, 31, 83, 68, 7, 28, 6, 72, 76, 25, 22, 21, 76, 92, 95, 68],
  linkedinText: [26, 7, 91, 4, 95, 31, 16, 11, 0, 83, 66, 65, 90, 18, 7, 27, 19],
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
