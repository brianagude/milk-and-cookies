import { type SchemaTypeDefinition } from 'sanity'
import { home } from "./documents/home"
import { landing } from "./documents/landing"
import { settings } from "./documents/settings"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ settings, landing, home ],
}
