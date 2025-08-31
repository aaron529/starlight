---
title: Messages
description: Messages Configuration
---

Messages configuration file:

```yml
help-commands:
  ll:
    default:
      - '&3&l» &r&3LiarsLounge:'
      - '&7/ll join &o<arena/group>'
      - '&7/ll leave'
      - '&7/ll start'
      - '&7/ll spectate &o<arena>'
    admin:
      - '&7/ll arena'
      - '&7/ll setup'
      - '&7/ll build'
  arena:
    default:
      - '&3&l» &r&3LiarsLounge &7| &3Arena:'
      - '&7/ll arena join &o<name/group>'
      - '&7/ll arena leave'
      - '&7/ll spectate &o<arena>'
      - '&7/ll arena start'
    admin:
      - '&7/ll arena enable &o<name>'
      - '&7/ll arena disable &o<name>'
      - '&7/ll arena list'
  setup:
    no-session:
      - '&3&l» &r&3LiarsLounge &7| &3Setup:'
      - '&7/ll setup <arena_name> <world_name>'
      - '&7/ll setup lobby'
    in-session:
      - ''
      - '&3&l» &r&3LiarsLounge &7| &3Setup:'
      - '%exec_waiting%&7/ll setup waiting - %waiting_location%'
      - '%exec_table%&7/ll setup table - %table_location%'
      - '%cmd_chair%&7/ll setup chair <add/remove> - %chair_location%'
      - '%cmd_action_item%&7/ll setup action_item <add/remove> - %item_location%'
      - '%exec_save%&7/ll setup save'
      - '%exec_end%&7/ll setup end'
game:
  join: '&e%player_name% &7joined the game'
  left: '&c%player_name% &7left the game'
  spectating: '&7You are now spectating the game.'
  scoreboard:
    server-ip: '&emc.server.com'
    waiting:
      title: '&c&lLiarsLounge'
      lines:
        - '&7%date%'
        - ''
        - '&fMap: &a%arena_name%'
        - '&fPlayers: &a%players%/%max_players%'
        - ''
        - '%waiting_status%'
        - ''
        - '&fGroup: &a%arena_group%'
        - ''
        - '%server_ip%'
      waiting: '&7Waiting...'
      starting-in: '&fStarting in &a%seconds%s'
    in-game:
      title: '&c&lLiarsLounge'
      lines:
        - '&7Round #%round%'
        - ''
        - '&7» &6%table_card%''s Table'
        - ''
        - '&f&lCards:'
        - '%players%'
        - ''
        - '&fCalls: &a%calls%'
        - '&fEliminations: &a%eliminations%'
        - ''
        - '%server_ip%'
      player-card:
        turn: ' &d%player_name%&7: &b%cards%'
        not-turn: ' &7%player_name%: %cards%'
  items:
    guide:
      name: '&6How to play?'
      lore:
        - '&7Click to open guide.'
    leave-arena:
      name: '&cLeave Arena'
      lore:
        - '&7Click to leave the arena.'
    call-liar:
      name: '&cCall Liar!'
      lore:
        - '&7Click to call out a liar!'
    cards:
      king:
        not-selected:
          name: '&eKing Card'
          lore:
            - '&7Click to select and drop the King card.'
        selected:
          name: '&eKing Card &7(Selected)'
          lore:
            - '&7Drop the King card using the drop key.'
      queen:
        not-selected:
          name: '&5Queen Card'
          lore:
            - '&7Click to select and drop the Queen card.'
        selected:
          name: '&5Queen Card &7(Selected)'
          lore:
            - '&7Drop the Queen card using the drop key.'
      ace:
        not-selected:
          name: '&cAce Card'
          lore:
            - '&7Click to select and drop the Ace card.'
        selected:
          name: '&cAce Card &7(Selected)'
          lore:
            - '&7Drop the Ace card using the drop key.'
      joker:
        not-selected:
          name: '&3Joker Card'
          lore:
            - '&7Click to select and drop the Joker card.'
        selected:
          name: '&3Joker Card &7(Selected)'
          lore:
            - '&7Drop the Joker card using the drop key.'
  start-timer:
    msg: '&aStarting game in &e%seconds%...'
    title-waiting: "&cWaiting for players..."
    title-5: "&e5"
    title-4: "&e4"
    title-3: "&c3"
    title-2: "&c2"
    title-1: "&c1"
  game-started:
    msg: ''
    title: '&aGame Started!'
    subtitle: '&eGet ready to play!'
  table-card-animation: '%table_card%''s Table'
  notify-turn:
    your:
      msg: '&aIt''s your turn! You can now play your cards.'
      title: '&aYour Turn!'
      subtitle: '&7Play your cards wisely!'
    waiting: '&7Waiting for &e%player_name%&7 to play their cards...'
  not-your-turn: '&cIt''s not your turn!'
  card-not-selected: '&cSelect one or more cards before dropping!'
  protip: '&7(Pro Tip: Left-Click a card to select it)'
  card-dropped: '&6%player_name% &7smirks and slides 1 card onto the table...'
  cards-dropped: '&6%player_name% &7smirks and slides %cards% card onto the table...'
  cannot-call-liar: '&cYou cannot call liar right now!'
  card-select: '&7You Selected the %card% &7card!'
  card-deselect: '&7You Deselected the %card% &7card!'
  card-select-limit: '&cYou can''t select more than 3 cards'
  call-liar:
    initial: '&c%accuser_name%7 slams their hand down: &l“Liar!”&r &7They lock eyes with &e%target_name%&7 — tension fills the air.'
    not-liar: '&7Oops... &a%target_name%&7 was honest all along. &c%accuser_name%&7 pays the price for a false accusation.'
    is-liar: '&a%target_name%&7 was bluffing! &cThey must now face the consequence.'
  shot-hit:
    msg: '&c✖ %player_name%&7 could not escape the blade...'
    title: '&c✖ You were struck!'
    subtitle: '&7Better luck next time...'
  shot-pass: '&7The axe halts at the last moment — &a%player_name% lives to fight on!'
  cards:
    king: '&eKing'
    queen: '&5Queen'
    ace: '&cAce'
    joker: '&3Joker'
  game-over:
    msg: '&aCongratulations! &e%player_name% &ahas won the game!'
    no-players-left: '&cNo players left in the game.'
    title: '&a%player_name% Wins!'
    subtitle: '&7All others have been eliminated.'
usage:
  join: '&cUsage: /ll arena join <arena/group>'
  spectate: '&cUsage: /ll arena spectate <arena_name>'
  disable-arena: '&cUsage: /ll arena disable <arena_name>'
  enable-arena: '&cUsage: /ll arena enable <arena_name>'
  setup: '&cUsage: /ll setup <arena_name> <world_name>'
  chair: '&cUsage: /ll setup chair <add/remove>'
  chair-remove: '&cUsage: /ll setup chair remove <index>'
  action-item: '&cUsage: /ll setup action_item <add/remove>'
  action-item-remove: '&cUsage: /ll setup action_item remove <index>'
success:
  arena:
    join: '&aYou have joined the arena &f%arena%&a!'
    leave: '&cYou have left the arena!'
    enable: '&aArena &f%arena%&a has been enabled!'
    disable: '&cArena &f%arena%&c has been disabled!'
    list-header: '&3&l» &r&3LiarsLounge &7| &3Arena List:'
    list-row: '&f%sr_no%. &a%arena_name% &7- &e%players%&8/&6%max_players% &7- &c%status%'
    list-join: '&bClick to join'
    list-spectate: '&eClick to spectate'
  setup:
    started: '&bSetup session started for arena: &r%arena%'
    waiting: '&eWaiting location set to: %waiting_location%'
    table: '&eTable location set to: %table_location%'
    chairs: '&bChair Locations:'
    chair-add: '&eAdded a chair at location: %chair_location%'
    chair-remove: '&cRemoved chair at location: %chair_location%, index: %index%'
    action-items: '&bAction Items Location:'
    action-item-add: '&eAdded a action item at location: %item_location%'
    action-item-remove: '&cRemoved action item at location: %item_location%, index: %index%'
    save: '&aSetup saved successfully!'
    click-to-enable: '&7Click to enable the arena'
    end: '&cForcefully ended the setup session.'
    lobby: '&eLobby location set!'
error:
  invalid-num: '&cInvalid number provided!'
  not-in-arena: '&cYou are not in an arena!'
  in-an-arena: '&cYou are in an arena!'
  arena-not-found: '&cArena not found.'
  arena-already-enabled: '&cArena is already enabled.'
  arena-is-full: '&cArena is full!'
  arena-name-empty: '&cArena name cannot be empty.'
  arena-in-game: '&cArena is currently in game.'
  arena-not-in-game: '&cArena is not in game.'
  arena-not-in-waiting: '&cThe arena is not in waiting state'
  least-players: '&cYou need at least %min_players% players to start the arena.'
  location-not-set: 'Not Set'
  player-left-restart: '&c%player_name% &7left the arena during accusation. Restarting game...'
  chair-already-set: '&cChair location already set'
  admin-disabled-arena: '&cThe arena has been disabled by an admin.'
  no-permission: '&cYou do not have permission to perform this action!'
  no-session: '&cNo setup session is currently active.'
  setup-error: '&cMake sure to set all locations before saving. Setup at least 2 chairs along with equivalent action items location.'
  add-exceed: '&cYou can only set up to 4 chairs/action items!'
  world-not-found: '&cWorld &r%world% &cnot found.'
  cmd-not-allowed: '&c&cYou can''t do this during the game.'
  found-saved-arena: '&eFound a saved arena with the same name. Loading its config file.'
  requires-arena-disabled: '&cPlease disable the arena before '
  in-setup-session: '&cYou are currently in a setup session.'
  setup-session-join: '&cThere is already a setup session in progress. Use &7/ll setup join&c or save/end it.'
  unknown-subcommand: '&cUnknown subcommand'
gui:
  arena-selector:
    title: 'Arena Selector'
    join-item:
      waiting:
        name: '&a%arena_name%'
        lore:
          - '&fPlayers: &e%players%/%max_players%'
          - '&fStatus: &cWAITING'
          - ''
          - '&7• Click to join.'
      starting:
        name: '&a%arena_name%'
        lore:
          - '&fPlayers: &e%players%/%max_players%'
          - '&fStatus: &dSTARTING'
          - ''
          - '&7• Click to join.'
      playing:
        name: '&a%arena_name%'
        lore:
          - '&fPlayers: &e%players%/%max_players%'
          - '&fStatus: &bPLAYING'
          - ''
          - '&7• Click to spectate.'
    join-random:
      name: '&aJoin Random Arena'
      lore:
        - '&7Click to join a random arena.'
    next-page:
      name: '&a» &7Next Page'
      lore:
    previous-page:
      name: '&c« &7Previous Page'
      lore:
  book_guide:
      page_1:
        - "§3§l✦ Welcome to §d§lLiarsLounge! ✦\n\n"
        - "§8• §rEveryone starts\n  with §c6 Hearts§r\n\n"
        - "§8• §rMore Hearts = §2Better\n"
        - "  §2survival odds\n\n"
        - "§8• §rEach round, the\n  §6Table Card "
        - "§rshows\n  what should be\n  played."
      page_2:
        - "§2§lOn your turn:\n\n"
        - "§8• §rLeft-click a card to\n  §2select\n\n"
        - "§8• §rPress Q§r (§1drop§r) to\n  play\n\n"
        - "§8• §rPlay 1–3 cards\n\n"
        - "§8• §rIf you think someone\n"
        - "  lied use §cCall Liar!§r"
      page_3:
        - "§1§lCards:\n\n"
        - " §rKing, Queen, Ace\n"
        - " Joker = Wild Card\n\n"
        - "§4§lConsequences:\n\n"
        - "§8• §rIf they lied →\n  §5they face the axe.\n\n"
        - "§8• §rIf honest →\n  §cyou face the axe!\n\n"
        - "§8• §rPlayer loses §81§r heart"
      page_4:
        - "§6§lGoal:\n\n"
        - "§8• §rKeep your hearts\n  alive.\n\n"
        - "§8• §rBluff, call out liars,\n"
        - "  and survive the axe.\n\n"
        - "§8• §rLast player standing\n  wins!\n\n\n"
        - "§3§l- Good luck, Liar! -"
```