import { fetchAISuggestions } from '../../apps/web/src/lib/ai';

describe('AI fetch logic', () => {
  it('should return a suggestion string', async () => {
    const prompt = 'Test prompt';
    const suggestion = await fetchAISuggestions(prompt);
    expect(typeof suggestion).toBe('string');
    expect(suggestion.length).toBeGreaterThan(0);
  });
});
