import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? '',
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? '',
    }),
    // ...add more providers here
  ],

  callbacks: {
    async jwt({ trigger, token, account }) {
      // Persist the OAuth access_token to the token right after signin
      // if (trigger === "signIn" && account) {
      //   token.accessToken = account.access_token
      // }

      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken

      return session
    }
  }
}