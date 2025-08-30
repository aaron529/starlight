---
title: Installation
description: Complete guide to installing and setting up LiarsLounge on your Minecraft server
---

## Requirements

Before installing LiarsLounge, ensure your server meets these requirements:

- **Minecraft Version**: 1.8.8 (newer versions will be supported soon!)
- **Server Software**: Spigot, Paper (other forks may work but not officially supported)
- **Java Version**: Java 11 or higher
- **RAM**: At least 2GB available for smooth gameplay
- **Database**: MySQL (remote) or SQLite (local file) support

## Installation Steps

### 1. Download the Plugin

1. Purchase LiarsLounge from [Polymart](https://polymart.org/product/8361/liarslounge-bluff-betray)
2. Download the `.jar` file

### 2. Install on Server

1. Stop your Minecraft server
2. Copy `LiarsLounge-VER.jar` to your server's `plugins/` folder
3. Start your server to generate configuration files

### 3. Initial Configuration

After first startup, you'll find these files in `plugins/LiarsLounge/`:

- `config.yml` - Main plugin configuration
- `messages.yml` - All game messages and text
- `values.yml` - GUI items and visual settings
- `arenas/` - Folder for arena configurations

## Database Setup

You can configure the database for the plugin in `config.yml`

### Option 1: SQLite (Recommended for Small Servers)

SQLite requires no additional setup - it's ready to use:

```yaml
database:
  type: "SQLite"
  # Extra db settings are ignored for sqlite
```

### Option 2: MySQL (Recommended for Large Servers)

```yaml
database:
  type: "MySQL" # Set type to MySQL
  host: "your-mysql-host" # host for database
  port: 3306 # port number (default 3306)
  database: "liarslounge" # db name
  user: "your-username" # db username
  pass: "your-password" # db password
  ssl: false # weather ssl should be used
  verify-certificate: true # weather to verify the server certificate

  # HikariCP Connection pooling (advanced users)
  pool-size: 10
  max-lifetime: 1800000
  idle-timeout: 600000
  keepalive-time: 0
  connection-timeout: 30000
```

:::caution
Do not change the connection pooling values unless you know what you are doing.
:::

## Optional Dependencies

### PlaceholderAPI Integration

For enhanced integration with other plugins:

1. Install [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
2. Restart your server
3. LiarsLounge will automatically hook into PlaceholderAPI
