import { memoize } from 'lodash';

// Memoized mock AI response to reduce CPU overhead
export const getMockResponse = memoize((input: string) => {
  const responses = [
    "Das ist ein interessanter Gedanke. Erzähl mir mehr darüber.",
    "Ich verstehe vollkommen, wie du dich fühlst.",
    "Das klingt wirklich spannend! Was denkst du darüber?",
    "Ich bin ganz Ohr. Was beschäftigt dich heute?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
});

export const getFallbackResponse = () => "Entschuldige, ich bin gerade etwas abgelenkt. Lass uns gleich weiterreden.";