/**
 * Mock data for the v1 navigation skeleton.
 *
 * Nothing here comes from a server — it's all hardcoded so we can build and
 * test the screens before Supabase/auth/proximity detection exist.
 *
 * `mockPeople` is the one place a person's name/age/bio lives. Encounters,
 * matches, and conversations all just reference a `personId` instead of
 * repeating that info, the same way real tables would join on a foreign key.
 */

export type MockPerson = {
  id: string;
  firstName: string;
  age: number;
  bio: string;
};

export const mockPeople: MockPerson[] = [
  {
    id: '1',
    firstName: 'Maya',
    age: 27,
    bio: 'Coffee enthusiast, always exploring new spots around the city.',
  },
  {
    id: '2',
    firstName: 'Jordan',
    age: 24,
    bio: 'Into hiking, dogs, and finding the best tacos in town.',
  },
  {
    id: '3',
    firstName: 'Sam',
    age: 29,
    bio: 'Bookstore wanderer and weekend chef.',
  },
];

export function getPersonById(personId: string): MockPerson | undefined {
  return mockPeople.find((person) => person.id === personId);
}

// The current signed-in user. Also fake, since there's no auth yet.
export const mockCurrentUser: MockPerson = {
  id: 'me',
  firstName: 'Alex',
  age: 26,
  bio: "New to Crossed, excited to meet people I keep almost running into.",
};

/**
 * An "encounter" is intentionally vague about location — see the Crossed
 * screen for why. `context` should always read as "something happened
 * nearby", never as live or precise location info.
 */
export type MockEncounter = {
  id: string;
  personId: string;
  context: string;
  timeAgo: string;
};

export const mockEncounters: MockEncounter[] = [
  { id: '1', personId: '1', context: 'Crossed paths at a coffee shop', timeAgo: '2 hours ago' },
  { id: '2', personId: '2', context: 'Crossed paths nearby', timeAgo: 'Yesterday' },
  { id: '3', personId: '3', context: 'Crossed paths at a grocery store', timeAgo: '3 days ago' },
];

export type MockMatch = {
  id: string;
  personId: string;
  matchedAgo: string;
};

export const mockMatches: MockMatch[] = [
  { id: '1', personId: '1', matchedAgo: '1 hour ago' },
  { id: '2', personId: '2', matchedAgo: 'yesterday' },
];

export type MockMessage = {
  id: string;
  sender: 'me' | 'them';
  text: string;
};

export type MockConversation = {
  id: string;
  personId: string;
  messages: MockMessage[];
};

export const mockConversations: MockConversation[] = [
  {
    id: '1',
    personId: '1',
    messages: [
      { id: 'm1', sender: 'them', text: 'Hey! Small world running into you at the coffee shop 😄' },
      { id: 'm2', sender: 'me', text: 'Right?? What a coincidence' },
      { id: 'm3', sender: 'them', text: 'Want to grab coffee again sometime?' },
      { id: 'm4', sender: 'me', text: 'See you there!' },
    ],
  },
  {
    id: '2',
    personId: '2',
    messages: [
      { id: 'm1', sender: 'them', text: 'That trail was packed today' },
      { id: 'm2', sender: 'me', text: 'Right, I noticed you pass by near the summit' },
      { id: 'm3', sender: 'them', text: 'Haha for sure, small world' },
    ],
  },
];
