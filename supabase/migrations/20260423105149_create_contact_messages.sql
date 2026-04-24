/*
  # Create contact_messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, sender's name)
      - `email` (text, sender's email)
      - `message` (text, message body)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS
    - Anyone can insert (public contact form)
    - Only authenticated users (owner) can select
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);
