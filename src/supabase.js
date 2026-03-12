import { createClient } from '@supabase/supabase-js'

// Dapatkan URL dan Key ini dari dashboard Supabase:
// Project Settings -> API -> Project URL & Project API Keys (anon/public)
const supabaseUrl = 'https://tstuolyanvxqkcmwhvuc.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzdHVvbHlhbnZ4cWtjbXdodnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMTY3NDcsImV4cCI6MjA4NTU5Mjc0N30.dFaDhqRn-VwIvnH0dcm6bac_NuQb7eecDwc1XW8mFEg'

export const supabase = createClient(supabaseUrl, supabaseKey)
