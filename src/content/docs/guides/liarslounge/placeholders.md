---
title: Placeholders
description: A comprehensive guide to all available placeholders for displaying player statistics and game data.
---

### Basic Game Stats

| Placeholder | Description | Example Output | Notes |
|-------------|-------------|----------------|-------|
| `%liarslounge_stats_wins%` | Total number of games won | `15` | Tracks victories only |
| `%liarslounge_stats_deaths%` | Total number of times eliminated | `42` | Deaths by axe strikes |
| `%liarslounge_stats_gamesplayed%` | Total games participated in | `57` | Includes wins, losses, and disconnects |
| `%liarslounge_stats_eliminations%` | Players you've eliminated | `23` | Successful "Liar!" calls |
| `%liarslounge_stats_calls%` | Total accusation attempts | `89` | Both successful and failed calls |

### Time-Based Data

| Placeholder | Description | Example Output | Notes |
|-------------|-------------|----------------|-------|
| `%liarslounge_stats_firstplay%` | First time playing | `2024/03/15 14:30` | Format: yyyy/MM/dd HH:mm |
| `%liarslounge_stats_lastplay%` | Most recent game | `2024/08/31 16:45` | Shows `--` if never played |

## 🔧 Technical Details

### Data Types
- **Integers**: `wins`, `deaths`, `eliminations`, `calls`, `gamesplayed`
- **Timestamps**: `firstplay`, `lastplay` (Instant objects converted to formatted strings)
- **Null Handling**: Returns `--` when no data exists

### Date Format
All timestamp placeholders use the format: `yyyy/MM/dd HH:mm`
- **Year**: 4 digits (e.g., 2024)
- **Month**: 2 digits with leading zero (e.g., 03)
- **Day**: 2 digits with leading zero (e.g., 15)
- **Hour**: 24-hour format (e.g., 14 = 2 PM)
- **Minute**: 2 digits with leading zero (e.g., 05)

### Performance Notes
- All placeholders are cached for performance
- Statistics update in real-time after each game
- No database queries during placeholder resolution

## 🎮 Game Context

**Wins** 🏆
- Awarded when you're the last player standing
- Most prestigious statistic

**Deaths** ☠️
- Occurs when the axe strikes you fatally
- Happens after being caught lying or making false accusations
- Tracked across all elimination methods

**Eliminations** ⚔️
- Successful "Liar!" calls that result in opponent elimination
- Demonstrates your ability to read other players
- Key metric for skilled players

**Calls** 📢
- Total number of "Liar!" accusations made
- Includes both successful and unsuccessful attempts
- Shows your aggression level

**Games Played** 🎯
- Complete participation count
- Includes games where you disconnected
- Base metric for calculating percentages