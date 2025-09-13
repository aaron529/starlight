// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "LiarsLounge",
      description:
        "LiarsLounge brings the psychological thriller of the popular Steam game Liar’s Bar directly into your Minecraft server. Challenge players to outsmart, outbluff, and outlast their opponents in this high-stakes game of deception and strategy.",
      //head: [
      //  { tag: "meta", attrs: { property: "og:title", content: "🪓 LiarsLounge - Bluff, Betray & Survive" } },
      //  { tag: "meta", attrs: { property: "og:description", content: "LiarsLounge brings the psychological thriller of the popular Steam game Liar’s Bar directly into your Minecraft server. Challenge players to outsmart, outbluff, and outlast their opponents in this high-stakes game of deception and strategy." } },
      //  { tag: "meta", attrs: { property: "og:url", content: "https://kooy29.netlify.app/" } },
      //  { tag: "meta", attrs: { property: "og:image", content: "https://images.polymart.org/product/8361/header.png?t=1756652074&v=3" } },
      //  { tag: "meta", attrs: { name: "theme-color", content: "#ea6033" } },
      //  { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } }
      //],
      social: [
        { icon: "github", label: "GitHub", href: "#" },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/rsYRdv8hJM",
        },
      ],
      sidebar: [
        {
          label: "LiarsLounge",
          items: [
            { label: "Installation", link: "/guides/liarslounge/" },
            {
              label: "Setup",
              link: "/guides/liarslounge/setup/",
            },
            {
              label: "Gameplay",
              link: "/guides/liarslounge/gameplay-overview/",
            },
            {
              label: "Commands & Permissions",
              link: "/guides/liarslounge/commands-permissions/",
            },
            {
              label: "Configuration",
              link: "/guides/liarslounge/configuration/",
            },
            {
              label: "Placeholders",
              link: "/guides/liarslounge/placeholders/",
            },
            {
              label: "Messages",
              link: "/guides/liarslounge/messages/",
            },
            {
              label: "Terms & Conditions",
              link: "/guides/liarslounge/terms-conditions/",
            },
            // {
            //   label: "Troubleshooting",
            //   link: "/guides/liarslounge/troubleshooting/",
            // },
          ],
        },
        // Other sections...
      ],
    }),
  ],
});
