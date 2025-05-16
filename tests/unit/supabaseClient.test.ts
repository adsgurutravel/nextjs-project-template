import { supabase } from '../../apps/web/src/lib/supabaseClient';

describe('Supabase Client', () => {
  it('should have a valid supabase client instance', () => {
    expect(supabase).toBeDefined();
    expect(typeof supabase.from).toBe('function');
  });
});
