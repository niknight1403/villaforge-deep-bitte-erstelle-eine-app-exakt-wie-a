import { z } from 'zod';

// Schema for Persona Plugin Registration
export const PersonaSchema = z.object({
  id: z.string(),
  name: z.string(),
  systemPrompt: z.string(),
  modelEndpoint: z.string().url(),
  version: z.string().default('1.0.0'),
});

export type Persona = z.infer<typeof PersonaSchema>;

class PersonaGateway {
  private registry: Map<string, Persona> = new Map();

  register(persona: Persona) {
    this.registry.set(persona.id, persona);
    console.log(`Persona ${persona.name} registered successfully.`);
  }

  getPersona(id: string): Persona | undefined {
    return this.registry.get(id);
  }

  async generateResponse(personaId: string, userMessage: string): Promise<string> {
    const persona = this.getPersona(personaId);
    if (!persona) throw new Error('Persona not found');

    // Simulated API call to external model endpoint
    return `[Mock Response from ${persona.name}]: Context-aware reply to "${userMessage}"`;
  }
}

export const personaGateway = new PersonaGateway();

// Example Registration
personaGateway.register({
  id: 'test-bot',
  name: 'Luna',
  systemPrompt: 'You are a helpful assistant.',
  modelEndpoint: 'https://api.example.com/v1/chat'
});