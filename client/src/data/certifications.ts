export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialUrl?: string;
  previewOnly?: boolean;
  image?: string;
}

export const certifications: Certification[] = [
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp', issued: 'Aug 2024', credentialUrl: 'https://www.freecodecamp.org/certification/nirjall/responsive-web-design' },
  { title: 'Learning the JavaScript Language', issuer: 'LinkedIn', issued: 'Aug 2024', previewOnly: true, image: 'assets/images/learning%20the%20javascript%20language.png' },
  { title: 'AWS Academy Graduate Cloud Foundations', issuer: 'Amazon Web Services', issued: 'Oct 2023', credentialUrl: 'https://www.credly.com/badges/94bab330-5a32-4332-8cba-ec627a0fd34a' },
  { title: 'AWS Cloud Quest: Cloud Practitioner', issuer: 'Amazon Web Services', issued: 'Aug 2023', credentialUrl: 'https://www.credly.com/badges/cc326b43-88b0-4398-9896-f7309324fffb' },
  { title: 'Figma Essential Training: The Basics', issuer: 'LinkedIn', issued: 'Aug 2024', previewOnly: true, image: 'assets/images/figma%20essential%20training.png' },
  { title: 'AWS Academy Graduate Data Engineering', issuer: 'Amazon Web Services', issued: 'Nov 2023', credentialUrl: 'https://www.credly.com/badges/3bece22e-2456-43bb-ba14-2239c5c21dd4' },
  { title: 'AWS Academy Graduate Machine Learning for Natural Language Processing', issuer: 'Amazon Web Services', issued: 'Nov 2023', credentialUrl: 'https://www.credly.com/badges/1e70390e-9077-4cde-9f06-f448af7994b6' },
  { title: 'AWS Academy Graduate Machine Learning Foundations', issuer: 'Amazon Web Services', issued: 'Oct 2023', credentialUrl: 'https://www.credly.com/badges/e9e37e57-2d02-4a8c-97b4-fefa31b1205b' },
];
