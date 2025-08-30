---
title: Commands & Permissions
description: Complete reference for all LiarsLounge commands and permission nodes
---

## Overview

LiarsLounge uses a comprehensive command system with role-based permissions. Commands are organized into **Player Commands** for regular gameplay and **Admin Commands** for server management.

## Permission Nodes Reference

### Core Permissions

| Permission | Default | Description |
|------------|---------|-------------|
| `liarslounge.admin` | OP | Access to all admin commands |
| `liarslounge.allow_commands` | OP | Execute any command while in an arena |
| `liarslounge.join` | True | Join arenas |
| `liarslounge.spectate` | True | Spectate ongoing games |
| `liarslounge.leave` | True | Leave arenas |
| `liarslounge.list` | True | View arena lists |
| `liarslounge.start` | OP | Start arena games |
| `liarslounge.setup` | OP | Create and configure arenas |
| `liarslounge.arena.enable` | OP | Enable arenas |
| `liarslounge.arena.disable` | OP | Disable arenas |

:::tip[Permission Setup]
Most servers only need to configure `liarslounge.admin` for administrators. All player permissions default to `true` for a seamless experience.
:::

## Player Commands

These commands are available to all players with appropriate permissions.

### Basic Gameplay

#### `/ll join [arena/group]`
**Permission:** `liarslounge.join`  
**Aliases:** `/liarslounge join`

Join an arena or arena group.

**Usage Examples:**
```
/ll join main_lounge        # Join specific arena
/ll join vip                # Join arena group "vip"
```

**Behavior:**
- With arena name: Directly joins that arena
- With group name: Joins any available arena in that group
- Shows error if arena is full or in-game

#### `/ll gui`
**Permission:** `-`  
**Aliases:** `/ll gui`

Opens arena selector gui.

#### `/ll leave`
**Permission:** `liarslounge.leave`  
**Aliases:** `/leave`, `/liarslounge leave`

Leave your current arena.

**Usage:**
```
/ll leave
```

**Behavior:**
- Immediately removes you from arena
- Returns you to lobby location
- Notifies other players you left
- If in-game during accusation phase, resets the game

#### `/ll spectate <arena>`
**Permission:** `liarslounge.spectate`  
**Aliases:** `/liarslounge spectate`

Spectate an ongoing game in the specified arena.

**Usage:**
```
/ll spectate main_lounge
```

**Requirements:**
- Arena must be in "PLAYING" state
- Cannot spectate waiting or starting arenas
- Spectators cannot interfere with gameplay

#### `/ll start`
**Permission:** `liarslounge.start` (OP only by default)  
**Aliases:** `/liarslounge start`

Force-start a game in your current arena.

**Usage:**
```
/ll start
```

**Requirements:**
- Must be in an arena
- Arena must be in waiting state
- Must have minimum required players (2+)

:::caution[Admin Permission]
By default, only OPs can force-start games. Consider carefully before giving this permission to regular players.
:::

## Admin Commands

These commands require `liarslounge.admin` permission and are used for server management.

### Arena Management

#### `/ll arena enable <name>`
**Permission:** `liarslounge.arena.enable`

Enable a disabled arena, making it joinable by players.

**Usage:**
```
/ll arena enable main_lounge
```

**Effects:**
- Arena becomes visible in `/ll arena list`
- Players can join the arena
- Arena appears in GUI selectors

#### `/ll arena disable <name>`
**Permission:** `liarslounge.arena.disable`

Disable an arena, preventing new players from joining.

**Usage:**
```
/ll arena disable main_lounge
```

**Effects:**
- Arena is now no longer accessible

#### `/ll arena list`
**Permission:** `liarslounge.list`

Display all configured arenas with their status.

**Usage:**
```
/ll arena list
```

**Display Format:**
```
» LiarsLounge | Arena List:
1. main_lounge - 2/4 - WAITING     [Click to join]
2. vip_room - 4/4 - PLAYING        [Click to spectate]  
3. tournament - 0/4 - WAITING      [Click to join]
```

**Interactive Features:**
- Click arena names to join (if waiting/starting)
- Click arena names to spectate (if playing)
- Real-time status updates

### Setup Commands

#### `/ll setup <arena_name> <world_name>`
**Permission:** `liarslounge.setup`

Start an interactive arena setup session.

**Usage:**
```
/ll setup main_lounge world
/ll setup vip_arena world_games
```

**Process:**
1. Creates new arena configuration
2. Starts guided setup with holograms
3. Provides interactive command list
4. Validates setup before saving

#### `/ll setup lobby`
**Permission:** `liarslounge.setup`

Set the global lobby location where players return after games.

**Usage:**
```
/ll setup lobby
```

**Requirements:**
- Must be executed at desired lobby location
- Should be set before creating arenas

### Setup Session Commands

These commands are only available during an active setup session.

#### `/ll setup waiting`
**Permission:** `liarslounge.setup`

Set the waiting area location for the arena being configured.

**Usage:**
```
/ll setup waiting
```

**Requirements:**
- Must be in an active setup session
- Stand at desired waiting location

#### `/ll setup table`
**Permission:** `liarslounge.setup`

Set the central table location where cards and holograms appear.

**Usage:**
```
/ll setup table
```

**Requirements:**
- Must be in an active setup session  
- Stand at desired table center

#### `/ll setup chair add`
**Permission:** `liarslounge.setup`

Add a chair location to the arena.

**Usage:**
```
/ll setup chair add
```

**Alternative Method:**
- Right-click any location while in setup mode to instantly add a chair

**Requirements:**
- Must be in an active setup session
- Maximum 4 chairs per arena
- Stand at desired chair location

#### `/ll setup chair remove <index>`
**Permission:** `liarslounge.setup`

Remove a specific chair by its index number.

**Usage:**
```
/ll setup chair remove 2
```

**Finding Index:**
- Use `/ll setup` to see numbered chair list
- Indices start from 0

#### `/ll setup action_item add`
**Permission:** `liarslounge.setup`

Add an action item location (where player items appear).

**Usage:**
```
/ll setup action_item add
```

**Critical Requirement:**
:::danger[Chair-Item Pairing]
Action items must match chairs exactly:
- Chair 0 → Action Item 0
- Chair 1 → Action Item 1
- Place action items 1 block in front of corresponding chairs (ideally on table)
:::

#### `/ll setup action_item remove <index>`
**Permission:** `liarslounge.setup`

Remove a specific action item by its index number.

**Usage:**
```
/ll setup action_item remove 1
```

#### `/ll setup save`
**Permission:** `liarslounge.setup`

Save the current arena configuration and end the setup session.

**Usage:**
```
/ll setup save
```

**Validation Checks:**
- ✅ Waiting location set
- ✅ Table location set
- ✅ Minimum 2 chairs configured
- ✅ Action items equal chair count

**Success Actions:**
- Configuration saved to file
- Player teleported to lobby
- Clickable "enable arena" message sent

#### `/ll setup end`
**Permission:** `liarslounge.setup`

Cancel the current setup session without saving changes.

**Usage:**
```
/ll setup end
```

**Effects:**
- Discards all unsaved configuration
- Ends setup session immediately
- No changes are applied

## Command Categories Summary

### Player Commands (Default Access)
- `/ll join [arena/group]` - Join arenas
- `/ll leave` - Leave current arena  
- `/ll spectate <arena>` - Watch ongoing games
- `/ll arena list` - View available arenas

### Moderator Commands (OP Required)
- `/ll start` - Force-start games
- `/ll arena enable <name>` - Enable arenas
- `/ll arena disable <name>` - Disable arenas

### Admin Commands (OP Required)
- `/ll setup <arena> <world>` - Create arenas
- `/ll setup lobby` - Set global lobby
- All setup session commands

## Command Aliases

LiarsLounge supports multiple command formats:

| Short Form | Full Form | Alternative |
|------------|-----------|-------------|
| `/ll` | `/liarslounge` | - |
| `/leave` | `/ll leave` | - |

## Permission Group Examples

### Basic Player Group
```yaml
# For regular players
permissions:
  - liarslounge.join
  - liarslounge.leave  
  - liarslounge.spectate
  - liarslounge.list
```

### Moderator Group
```yaml  
# For moderators who can manage games
permissions:
  - liarslounge.join
  - liarslounge.leave
  - liarslounge.spectate
  - liarslounge.list
  - liarslounge.start
  - liarslounge.arena.enable
  - liarslounge.arena.disable
```

### Admin Group
```yaml
# For full administrators
permissions:
  - liarslounge.admin  # Grants access to everything
```

## Special Considerations

### Commands During Games

Players with `liarslounge.allow_commands` can execute any command while in arenas. Without this permission, only these commands work during games:

- `/ll leave`
- `/leave`  
- `/liarslounge leave`

### Arena State Restrictions

Some commands have restrictions based on arena state:

| Command | Waiting | Starting | Playing |
|---------|---------|----------|---------|
| `/ll join` | ✅ | ✅ | ❌ |
| `/ll spectate` | ❌ | ❌ | ✅ |
| `/ll start` | ✅ | ✅ | ❌ |
| `/ll leave` | ✅ | ✅ | ✅ |

### Error Messages

Common error messages and their meanings:

- **"Arena not found"** - Invalid arena name provided
- **"Arena is full!"** - Maximum players reached
- **"Arena is currently in game"** - Cannot join ongoing game
- **"You are not in an arena!"** - Command requires being in an arena
- **"No permission"** - Insufficient permissions for command