---
title: Setup
description: Once installed, now we will setup the plugin
---

### 1. Set Global Lobby Location

Before creating any arenas, set your main lobby location where players return after games:

```
/ll setup lobby
```

:::tip[Important First Step]
Always set the lobby location first! This is where players are teleported after games end or teleported after an arena has been setup
:::

### 2. Create Your First Arena

# 🎥 Video Tutorial

<iframe width="100%" height="100%" style="height:400px;" src="https://www.youtube.com/embed/Lcb4W1bzFnY?si=FVE-Vlne3hJtnbgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Start the interactive arena setup process:

```
/ll setup <arena_name> <world_name>
```

**Example:**
```
/ll setup arena1 world
```

This starts a guided setup session with setup messages showing you what to configure next.

### 3. Configure Arena Locations

Follow these steps in order during your setup session:

#### Set Waiting Area
```
/ll setup waiting
```
- Stand where players should wait before games start
- This is where players gather and see the countdown

#### Set Table Location  
```
/ll setup table
```
- Stand at the center of your game table
- Cards and holograms will appear here during gameplay

#### Add Player Chairs
```
/ll setup chair add
```

:::caution[Chair Requirements]
- **Minimum**: 2 chairs required
- **Maximum**: 4 chairs supported  
- **Quick Setup**: Right-click any location to instantly set a chair there
- Chairs should face the table for the best player experience
:::

Add chairs one by one by standing at each desired location and running the command, or simply right-click locations.

#### Add Action Item Locations
```
/ll setup action_item add
```

:::danger[Critical Setup Rule]
**Action items MUST match chairs exactly!**

- Chair 0 → Action Item 0 (place just in front of Chair 0)
- Chair 1 → Action Item 1 (place just in front of Chair 1)  
- And so on...

This ensures that "The Axe" appear in the correct position for each player.
:::

### 4. Review and Save

Check your setup progress anytime:
```
/ll setup
```

This shows:
- ✅ Waiting location status
- ✅ Table location status  
- ✅ Number of chairs configured
- ✅ Number of action items configured

### 5. Complete Setup

When everything is configured correctly:

```
/ll setup save
```

**Or to cancel without saving:**
```
/ll setup end
```

:::note[Automatic Validation]
The plugin automatically checks that you have:
- All required locations set
- At least 2 chairs
- Equal number of chairs and action items
:::

### 6. Enable Your Arena

After saving, you'll be teleported back to the main lobby and receive a **clickable message** to enable your arena. Click it, or use:

```
/ll arena enable <arena_name>
```

### 7. Test Your Arena

Verify everything works:

```
/ll arena list
```

You'll see your arena listed with:
- Player count (0/4)
- Status (WAITING)
- Click-to-join functionality

Join your arena to test:
```
/ll join <arena_name>
```

## Setup Commands Reference

| Command | Description | Requirements |
|---------|-------------|--------------|
| `/ll setup lobby` | Set global lobby location | Run first |
| `/ll setup <arena> <world>` | Start arena setup | Creates new arena |
| `/ll setup waiting` | Set waiting area | Stand at desired location |
| `/ll setup table` | Set table center | Stand at table center |
| `/ll setup chair add` | Add chair position | Stand at chair location |
| `/ll setup action_item add` | Add item location | Stand in front of matching chair |
| `/ll setup save` | Save arena | Requires all locations set |
| `/ll setup end` | Cancel setup | Discards unsaved changes |

### Alternative Chair Placement

Instead of using commands, you can **right-click any location** to instantly set a chair there during setup mode.

## Multiple Arena Management

### Creating Additional Arenas

Repeat the setup process for multiple arenas:

```
/ll setup lounge_2 world
/ll setup vip_room world_vip
/ll setup tournament_arena world_events
```

### Arena Groups

Players can join arenas by name or browse available options:

```
/ll gui                    # Opens arena selector GUI
/ll join main_lounge       # Join specific arena/group
/ll spectate lounge_2      # Spectate ongoing games
```

### Extras
If you see "Found a saved arena with the same name":
- The plugin detected an existing configuration
- Your previous settings are loaded automatically
- Modify as needed and save again