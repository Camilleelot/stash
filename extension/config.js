// Stash Configuration
// Replace these with your Supabase project details

const CONFIG = {
  // Your Supabase project URL (from Project Settings > API)
    SUPABASE_URL: 'https://xsbuhzhmrlifiladygym.supabase.co',

  // Your Supabase anon/public key (from Project Settings > API)
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzYnVoemhtcmxpZmlsYWR5Z3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNjI1NDAsImV4cCI6MjA4MzkzODU0MH0.eXUbM_qC8RHkSaVJwx8Jk7bRfN1XKTdzdXasl3CYGZU',

  // Your web app URL (after deploying to Vercel/Netlify)
    WEB_APP_URL: 'https://stashandsoon.vercel.app/',

  // Your user ID from Supabase (Authentication > Users)
  // For multi-user mode, this can be removed and auth will be required
    USER_ID: '4704a110-b451-40d6-b67b-c3a2f278db99',
};

// Don't edit below this line
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
