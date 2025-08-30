// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentation",
      social: [{ icon: "github", label: "GitHub", href: "#" }, { icon: "discord", label: "Discord", href: "https://discord.gg/rsYRdv8hJM" }],
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
