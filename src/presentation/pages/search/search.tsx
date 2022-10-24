import React from 'react'
import Styles from './search-styles.scss'
import Loading from '../../components/loading/loading'

const Search: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img width='200' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iDQogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIg0KICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgaWQ9ImJoZl9pY29uLWxvZ28iDQogICB2aWV3Qm94PSIwIDAgNDA5NiA0MDk2Ig0KICAgdmVyc2lvbj0iMS4xIg0KICAgc29kaXBvZGk6ZG9jbmFtZT0iYW1lcmljYW5hcy1sb2dvLnN2ZyINCiAgIHdpZHRoPSI0MDk2Ig0KICAgaGVpZ2h0PSI0MDk2Ig0KICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4yICg1YzNlODBkLCAyMDE3LTA4LTA2KSINCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iRzpcVXNlcnNcc3VpdGVkb2FsZXhcc2l0ZXNcc3ZnXGFtZXJpY2FuYXMtbG9nby0wLnBuZyINCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5NiINCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI5NiI+DQogIDxtZXRhZGF0YQ0KICAgICBpZD0ibWV0YWRhdGE5Ij4NCiAgICA8cmRmOlJERj4NCiAgICAgIDxjYzpXb3JrDQogICAgICAgICByZGY6YWJvdXQ9IiI+DQogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0Pg0KICAgICAgICA8ZGM6dHlwZQ0KICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPg0KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4NCiAgICAgIDwvY2M6V29yaz4NCiAgICA8L3JkZjpSREY+DQogIDwvbWV0YWRhdGE+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzNyIgLz4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxIg0KICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIg0KICAgICBncmlkdG9sZXJhbmNlPSIxMCINCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCINCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNjAwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4MzciDQogICAgIGlkPSJuYW1lZHZpZXc1Ig0KICAgICBzaG93Z3JpZD0iZmFsc2UiDQogICAgIGlua3NjYXBlOnpvb209IjAuMDQiDQogICAgIGlua3NjYXBlOmN4PSI0MTk3LjcxNjQiDQogICAgIGlua3NjYXBlOmN5PSIzNDczLjk0OTYiDQogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04Ig0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJiaGZfaWNvbi1sb2dvIiAvPg0KICA8cGF0aA0KICAgICBkPSJtIDYzNy44Mjg4OCwyMDE2LjEzNzYgYyAyNi43MjMzLC0yLjA1NTcgNDkuMzM1NCwtMTAuMjc4MiA0OS4zMzU0LC0zMC44MzQ2IDAsLTMwLjgzNDcgLTI4Ljc3OSwtMzAuODM0NyAtNDkuMzM1NCwtMzIuODkwMyAtMzkuMDU3MTgsMi4wNTU2IC00My4xNjg0NywxNi40NDUxIC01MS4zOTEwNCw0My4xNjg0IGggLTc2LjA1ODggYyA2LjE2Njk0LC05MC40NDgyIDcxLjk0NzUxLC0xMDQuODM3NyAxMjcuNDQ5ODQsLTEwNC44Mzc3IDU5LjYxMzcsMCAxMjcuNDQ5OSwxNi40NDUxIDEyNy40NDk5LDg0LjI4MTQgdiAxODAuODk2NCBjIDAsMTYuNDQ1MSA0LjExMTMsMjIuNjEyMSAxNi40NDUxLDMwLjgzNDcgdiAxMi4zMzM5IGggLTg2LjMzNjkgYyAtNC4xMTEzLC0xMC4yNzgzIC00LjExMTMsLTIyLjYxMiAtNi4xNjcxLC0zNC45NDU5IC0yNC42Njc3LDI2LjcyMzMgLTU3LjU1NzksNDUuMjI0IC05NC41NTk0Nyw0NS4yMjQgLTU1LjUwMjM2LDAgLTk0LjU1OTU4LC0zMC44MzQ2IC05NC41NTk1OCwtOTAuNDQ4MyAwLC04OC4zOTI2IDc0LjAwMzE1LC05Ni42MTUyIDEzNy43MjgwNSwtMTAyLjc4MiB6IG0gNTEuMzkxLDM3LjAwMTYgYyAtMzIuODkwMiwyMi42MTIxIC0xMDguOTQ4OTgsOC4yMjI1IC0xMDguOTQ4OTgsNjEuNjY5MiAyLjA1NTY1LDI2LjcyMzQgMTQuMzg5NTEsMzcuMDAxNyAzOS4wNTcxOCwzNy4wMDE3IDU3LjU1OCwtMTAuMjc4MyA3MS45NDc2LC0yNi43MjM1IDY5Ljg5MTgsLTk4LjY3MDkgeiBtIDU3NS41ODAyMiwtNDMuMTY4NSB2IDE5MS4xNzQ3IGggLTgwLjE3MDIgViAyMDA3LjkxNSBjIDAsLTI4Ljc3OTEgLTIwLjU1NjMsLTQ5LjMzNTQgLTQ1LjIyNDIsLTQ5LjMzNTQgLTQxLjExMjgsNi4xNjY5IC00Ny4yNzk3LDI2LjcyMzQgLTUxLjM5MDksNjEuNjY5MiB2IDE4MC44OTY2IGggLTgwLjE3MDIgdiAtMTgwLjg5NjYgYyAyLjA1NTgsLTM0Ljk0NTggLTguMjIyNTMsLTYxLjY2OTIgLTQzLjE2ODQzLC02MS42NjkyIC01MS4zOTEyLDIuMDU1NiAtNTEuMzkxMiwyNi43MjM0IC01MS4zOTEyLDU5LjYxMzYgdiAxODIuOTUyMiBoIC04MC4xNyB2IC0zMDIuMTc5NSBoIDc2LjA1ODggdiA0My4xNjg1IGMgMTguNTAwOCwtMzIuODkwMiA0My4xNjg1LC01MS4zOTEgODYuMzM3LC01MS4zOTEgNDMuMTY4NDMsMCA2NS43ODA1MywxNi40NDUxIDgyLjIyNTczLDUxLjM5MSAyMC41NTY0LC0zNy4wMDE1IDU1LjUwMjMsLTUxLjM5MSA5Mi41MDQsLTUxLjM5MSA3OC4xMTQ0LDYuMTY2OSA5OC42NzA4LDU5LjYxMzcgOTQuNTU5NiwxMTkuMjI3MyB6IG0gMTI3LjQ0OTksNTkuNjEzNiBjIDAsNDcuMjc5OCAyNi43MjMzLDc2LjA1ODggNjcuODM2Miw3Ni4wNTg4IDI4Ljc3OSwtMi4wNTU3IDQ1LjIyNDEsLTE0LjM4OTUgNTMuNDQ2NywtMzQuOTQ1OSBoIDgwLjE3MDEgYyAtMTAuMjc4Myw1My40NDY3IC02MS42Njk0LDk4LjY3MDcgLTEzNS42NzI0LDk4LjY3MDcgLTI2LjcyMzUsMCAtMTQ1Ljk1MDcsLTguMjIyNiAtMTQ1Ljk1MDcsLTE1OC4yODQ0IDAsLTExNy4xNzE2IDY5Ljg5MTgsLTE2MC4zNDAyIDE0MS44MzkzLC0xNjAuMzQwMiA3Ni4wNTg4LDAgMTQzLjg5NSwzNy4wMDE2IDE0MS44Mzk0LDE3OC44NDA5IHogbSAyLjA1NTYsLTUxLjM5MTEgaCAxMjMuMzM4NSBjIDAsLTM0Ljk0NTkgLTI2LjcyMzUsLTYzLjcyNDkgLTYxLjY2OTMsLTYzLjcyNDkgLTQzLjE2ODQsMCAtNTcuNTU3OSwzMC44MzQ3IC01OS42MTM3LDYzLjcyNDkgeiBtIDQyOS42MjkzLC0xMjcuNDQ5OCB2IDgwLjE3IGMgLTQzLjE2ODUsLTIuMDU1NiAtOTYuNjE1MiwtNi4xNjY5IC05Ni42MTUyLDg0LjI4MTQgdiAxNDMuODk1MSBoIC03OC4xMTQ0IHYgLTMwMi4xNzk2IGggNzQuMDAzMiB2IDUzLjQ0NjggYyAyOC43Nzg5LC01MS4zOTEyIDU3LjU1NzksLTYxLjY2OTQgOTguNjcwOCwtNTkuNjEzNyB6IG0gNDcuMjc5OCw2LjE2NjkgaCA4MC4xNzAxIHYgMzAyLjE3OTYgaCAtODAuMTcwMSB6IG0gMzM3LjEyNTMsMTA4Ljk0OTEgYyAtNi4xNjY4LC0zNC45NDYgLTI2LjcyMzIsLTQ5LjMzNTQgLTUxLjM5MDksLTQ5LjMzNTQgLTU1LjUwMjQsMCAtNjEuNjY5Myw1My40NDY3IC02MS42NjkzLDk2LjYxNTIgMCw1Ny41NTggMTguNTAwOCw5MC40NDgyIDU5LjYxMzYsOTAuNDQ4MiAzNy4wMDE3LC0yLjA1NTYgNDUuMjI0MiwtMTQuMzg5NCA1My40NDY3LC01My40NDY3IGggODAuMTcwMiBjIC0xMC4yNzgzLDcxLjk0NzUgLTU3LjU1ODEsMTE5LjIyNzMgLTEzNS42NzI1LDExOS4yMjczIC05Ni42MTUyLC0yLjA1NTYgLTEzOS43ODM4LC01OS42MTM3IC0xMzkuNzgzOCwtMTU2LjIyODggMCwtMTA4Ljk0OTEgNTUuNTAyNSwtMTYyLjM5NTggMTQxLjgzOTQsLTE2NC40NTE1IDk0LjU1OTYsMCAxMjkuNTA1NSw0Ny4yNzk4IDEzNS42NzI1LDExNS4xMTYxIHogbSAyNTIuODQ0MywxMC4yNzgyIGMgMjQuNjY3NiwtMi4wNTU3IDQ3LjI3OTcsLTEwLjI3ODIgNDcuMjc5NywtMzAuODM0NiAwLC0zMC44MzQ3IC0yOC43NzksLTMwLjgzNDcgLTQ5LjMzNTUsLTMyLjg5MDMgLTM5LjA1NzIsMi4wNTU2IC00My4xNjg0LDE2LjQ0NTEgLTQ5LjMzNTQsNDMuMTY4NCBoIC03OC4xMTQ0IGMgNi4xNjcsLTc0LjAwMzEgNTEuMzkxMSwtMTA0LjgzNzcgMTMxLjU2MTEsLTEwNC44Mzc3IDU5LjYxMzcsMCAxMjUuMzk0NCwyMC41NTY0IDEyNS4zOTQ0LDg2LjMzNjkgdiAxNzguODQxIGMgMCwxNi40NDUxIDQuMTExMiwyMi42MTIxIDE2LjQ0NSwzMC44MzQ3IHYgMTIuMzMzOSBoIC04Ni4zMzY5IGMgLTQuMTExNSwtMTIuMzMzOSAtNC4xMTE1LC0yNC42Njc5IC02LjE2NjksLTM0Ljk0NiAtMjYuNzIzNSwyNi43MjMzIC01NS41MDI1LDQ1LjIyNDEgLTk0LjU1OTYsNDUuMjI0MSAtNTcuNTU4MSwtMi4wNTU2IC05NC41NTk2LC0zMC44MzQ2IC05NC41NTk2LC05MC40NDgzIDIuMDU1NSwtNjcuODM2MSA0My4xNjg1LC05NC41NTk2IDEzNy43MjgxLC0xMDIuNzgyMSB6IG0gNDcuMjc5NywzNy4wMDE2IGMgLTE2LjQ0NTMsMTAuMjc4MiAtMzcuMDAxNSwxNC4zODk0IC01My40NDY3LDE2LjQ0NTEgLTMyLjg5MDUsMi4wNTU2IC01My40NDY4LDEyLjMzMzkgLTUzLjQ0NjgsNDMuMTY4NSAyLjA1NTYsMjguNzc5IDE2LjQ0NTIsMzkuMDU3MyAzOS4wNTc0LDM5LjA1NzMgNTcuNTU3OCwtMTAuMjc4MyA3NC4wMDI5LC0zMi44OTA0IDY3LjgzNjEsLTk4LjY3MDkgeiBtIDQyMS40MDY3LC01NS41MDI0IHYgMjAzLjUwODYgaCAtODAuMTcgdiAtMTg1LjAwNzggYyAyLjA1NTYsLTM0Ljk0NTkgLTEwLjI3ODEsLTU5LjYxMzYgLTQ5LjMzNTQsLTU5LjYxMzYgLTQ5LjMzNTUsMCAtNjEuNjY5NCw0MS4xMTI4IC02MS42Njk0LDgwLjE3IHYgMTY0LjQ1MTQgaCAtODAuMTcwMSB2IC0zMDIuMTc5NSBoIDc4LjExNDUgdiA0My4xNjg1IGMgMTguNTAwOCwtMzIuODkwMiA0Ny4yNzk4LC01MS4zOTEgOTAuNDQ4MywtNTEuMzkxIDU3LjU1OCwyLjA1NTYgMTAyLjc4MjEsMjIuNjEyIDEwMi43ODIxLDEwNi44OTM0IHogbSAxODkuMTE5MSwtNDUuMjI0MSBjIC0zMi44OTAyLDIuMDU1NiAtNDcuMjc5NywxMi4zMzM4IC01MS4zOTA5LDQzLjE2ODQgaCAtNzYuMDU4OCBjIDYuMTY2OSwtNzQuMDAzMSA1MS4zOTA5LC0xMDQuODM3NyAxMjkuNTA1MywtMTA0LjgzNzcgNDcuMjc5OCwwIDEyNy40NSw4LjIyMjUgMTI3LjQ1LDk0LjU1OTYgdiAxNzYuNzg1MiBjIDIuMDU1Niw0LjExMTMgMCwxNi40NDUyIDE0LjM4OTQsMjYuNzIzNCB2IDEyLjMzMzggaCAtODQuMjgxMyBjIC02LjE2NjksLTEyLjMzMzggLTYuMTY2OSwtMjQuNjY3NiAtOC4yMjI1LC0zNy4wMDE1IC0yNC42Njc3LDI4Ljc3OSAtNTMuNDQ2OCw0NS4yMjQxIC05Mi41MDQsNDcuMjc5OCAtNTMuNDQ2NywwIC05NC41NTk2LC0zMi44OTAzIC05NC41NTk2LC05MC40NDg0IDIuMDU1NywtNzEuOTQ3NSA0My4xNjg3LC04OC4zOTI1IDExMS4wMDQ4LC0xMDAuNzI2NSAzMi44OTAzLC0yLjA1NTYgNzYuMDU4OSwtNi4xNjY5IDc2LjA1ODksLTMyLjg5MDIgMCwtMzIuODkwMyAtMjYuNzIzNiwtMzIuODkwMyAtNTEuMzkxMywtMzQuOTQ1OSB6IG0gLTQuMTExMSwxMTcuMTcxNiBjIC0yMi42MTIxLDIuMDU1NiAtNTMuNDQ2OCwxMC4yNzgxIC01My40NDY4LDQzLjE2ODUgMCwzMi44OTAzIDIyLjYxMjEsMzcuMDAxNSAzOS4wNTczLDM5LjA1NzMgNTMuNDQ2NywtNC4xMTE0IDY5Ljg5MTksLTI4Ljc3OTEgNjkuODkxOSwtOTguNjcwOSAtMTguNTAwOSwxMC4yNzgyIC0zOS4wNTczLDE0LjM4OTQgLTU1LjUwMjQsMTYuNDQ1MSB6IG0gMjYzLjEyMjIsMzQuOTQ2IGMgNC4xMTE0LDQzLjE2ODQgMzcuMDAxNyw0NS4yMjQgNjMuNzI1LDQ1LjIyNCAyNi43MjM0LDAgNDkuMzM1MywtOC4yMjI1IDQ5LjMzNTMsLTI4Ljc3OSAyLjA1NTgsLTI4Ljc3ODkgLTQ3LjI3OTgsLTI4Ljc3ODkgLTkyLjUwMzgsLTQzLjE2ODQgLTQzLjE2ODUsLTEwLjI3ODMgLTk0LjU1OTYsLTI2LjcyMzMgLTkyLjUwMzksLTg2LjMzNyA0LjExMTEsLTc4LjExNDUgNjcuODM2MSwtMTAwLjcyNjUgMTI1LjM5NDIsLTEwMC43MjY1IDg2LjMzNywwIDEyNy40NDk4LDM0Ljk0NTggMTMxLjU2MTIsOTguNjcwOCBoIC03OC4xMTQ1IGMgLTQuMTExMywtMjguNzc5IC0yMi42MTIsLTM5LjA1NzEgLTUzLjQ0NjcsLTM5LjA1NzEgLTMyLjg5MDMsMCAtNDkuMzM1NCwxMC4yNzgxIC00OS4zMzU0LDI0LjY2NzcgMCwyNC42Njc2IDI0LjY2NzcsMjQuNjY3NiA5NC41NTk2LDQzLjE2ODQgNTcuNTU3OSwxNC4zODk2IDkyLjUwMzksNDEuMTEyOSA5NC41NTk1LDkwLjQ0ODMgLTQuMTExMiw3OC4xMTQ1IC01OS42MTM3LDEwMi43ODIyIC0xMzUuNjcyNSwxMDIuNzgyMiAtODYuMzM3LDAgLTEzNS42NzIzLC0zNy4wMDE3IC0xMzcuNzI4LC0xMDYuODkzNCB6IE0gNTAyLjE1NjQ3LDE3NDAuNjgxNCB2IDc0LjAwMzIgSCAzNTk1Ljg5OTIgdiAtNzQuMDAzMiB6IG0gMCw1NDAuNjM0MiB2IDc0LjAwMzEgSCAzNTk1Ljg5OTIgdiAtNzQuMDAzMSB6Ig0KICAgICBpZD0icGF0aDIiDQogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiDQogICAgIHN0eWxlPSJzdHJva2Utd2lkdGg6MjAuNTU2NDI4OTE7ZmlsbDojZTYwMDE0O2ZpbGwtb3BhY2l0eToxIg0KICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNzY2Njc3NzY2NjY3NzY2NjY2NjY2NzY2NjY2Njc2NjY2Njc2NjY2NjY2Nzc3NjY2Njc2NjY2NzY2NjY2NjY2NjY2NjY3NzY2NjY3NjY2Njc2NjY3Nzc2NjY2NjY2NjY2NjY3NjY2Nzc2NjY2NjY3NjY2Nzc2NjY2NjY2Njc2Njc2NjY2NzY2Njc2Njc3NjY3NjY2NjY2NjY2NjY2MiDQogICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIxMi40MDM5MDkiDQogICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIxMi40MDM5MDkiIC8+DQogIDxwYXRoDQogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiDQogICAgIGQ9Im0gOTY0OC4yMjU0LDIzNTMuMzMxIGMgMjUuNDI2MiwwIDQ0LjQ5NTksLTIzLjMwNzQgNDQuNDk1OSwtNDguNzMzNiAwLC0yNS40MjYzIC0xOS4wNjk3LC00Ni42MTQ4IC00NC40OTU5LC00Ni42MTQ4IC0yNS40MjYzLDAgLTQ2LjYxNDgsMjEuMTg4NSAtNDYuNjE0OCw0Ni42MTQ4IDAsMjUuNDI2MiAyMS4xODg1LDQ4LjczMzYgNDYuNjE0OCw0OC43MzM2IHogTSA2NTI1LjAzNTUsMjE2Mi42MzQyIGMgMjcuNTQ1MSwtMi4xMTg5IDUwLjg1MjUsLTEwLjU5NDMgNTAuODUyNSwtMzEuNzgyOCAwLC0zMS43ODI4IC0yOS42NjQsLTMxLjc4MjggLTUwLjg1MjUsLTMzLjkwMTcgLTQwLjI1ODIsMi4xMTg5IC00NC40OTU5LDE2Ljk1MDkgLTUyLjk3MTMsNDQuNDk2IGggLTc4LjM5NzYgYyA2LjM1NjYsLTkzLjIyOTYgNzQuMTU5OSwtMTA4LjA2MTYgMTMxLjM2ODksLTEwOC4wNjE2IDYxLjQ0NjgsMCAxMzEuMzY4OSwxNi45NTA5IDEzMS4zNjg5LDg2Ljg3MyB2IDE4Ni40NTkxIGMgMCwxNi45NTA5IDQuMjM3NywyMy4zMDc0IDE2Ljk1MDgsMzEuNzgyOCB2IDEyLjcxMzEgaCAtODguOTkxOCBjIC00LjIzNzcsLTEwLjU5NDIgLTQuMjM3NywtMjMuMzA3MyAtNi4zNTY2LC0zNi4wMjA1IC0yNS40MjYyLDI3LjU0NTEgLTU5LjMyNzksNDYuNjE0OCAtOTcuNDY3Miw0Ni42MTQ4IC01Ny4yMDkxLDAgLTk3LjQ2NzMsLTMxLjc4MjggLTk3LjQ2NzMsLTkzLjIyOTUgMCwtOTEuMTEwNyA3Ni4yNzg4LC05OS41ODYxIDE0MS45NjMyLC0xMDUuOTQyNyB6IG0gNTIuOTcxMywzOC4xMzk0IGMgLTMzLjkwMTYsMjMuMzA3MyAtMTEyLjI5OTIsOC40NzU0IC0xMTIuMjk5Miw2My41NjU2IDIuMTE4OSwyNy41NDUxIDE0LjgzMiwzOC4xMzkzIDQwLjI1ODIsMzguMTM5MyA1OS4zMjc5LC0xMC41OTQyIDc0LjE1OTksLTI3LjU0NTEgNzIuMDQxLC0xMDEuNzA0OSB6IG0gNTkzLjI3OSwtNDQuNDk2IHYgMTk3LjA1MzQgaCAtODIuNjM1MyB2IC0xOTkuMTcyMiBjIDAsLTI5LjY2NCAtMjEuMTg4NSwtNTAuODUyNSAtNDYuNjE0OCwtNTAuODUyNSAtNDIuMzc3LDYuMzU2NiAtNDguNzMzNiwyNy41NDUxIC01Mi45NzEzLDYzLjU2NTYgdiAxODYuNDU5MSBoIC04Mi42MzUzIHYgLTE4Ni40NTkxIGMgMi4xMTg5LC0zNi4wMjA1IC04LjQ3NTQsLTYzLjU2NTYgLTQ0LjQ5NTksLTYzLjU2NTYgLTUyLjk3MTMsMi4xMTg5IC01Mi45NzEzLDI3LjU0NTEgLTUyLjk3MTMsNjEuNDQ2OCB2IDE4OC41Nzc5IGggLTgyLjYzNTMgdiAtMzExLjQ3MTQgaCA3OC4zOTc1IHYgNDQuNDk1OSBjIDE5LjA2OTcsLTMzLjkwMTcgNDQuNDk2LC01Mi45NzE0IDg4Ljk5MTksLTUyLjk3MTQgNDQuNDk1OSwwIDY3LjgwMzMsMTYuOTUwOSA4NC43NTQxLDUyLjk3MTQgMjEuMTg4NiwtMzguMTM5NCA1Ny4yMDkxLC01Mi45NzE0IDk1LjM0ODQsLTUyLjk3MTQgODAuNTE2NSw2LjM1NjYgMTAxLjcwNSw2MS40NDY4IDk3LjQ2NzMsMTIyLjg5MzUgeiBtIDEzMS4zNjg5LDYxLjQ0NjggYyAwLDQ4LjczMzYgMjcuNTQ1MSw3OC4zOTc2IDY5LjkyMjIsNzguMzk3NiAyOS42NjM5LC0yLjExODkgNDYuNjE0OCwtMTQuODMyIDU1LjA5MDIsLTM2LjAyMDUgaCA4Mi42MzUzIGMgLTEwLjU5NDMsNTUuMDkwMSAtNjMuNTY1NiwxMDEuNzA0OSAtMTM5Ljg0NDQsMTAxLjcwNDkgLTI3LjU0NTEsMCAtMTUwLjQzODUsLTguNDc1NCAtMTUwLjQzODUsLTE2My4xNTE3IDAsLTEyMC43NzQ2IDcyLjA0MSwtMTY1LjI3MDYgMTQ2LjIwMDgsLTE2NS4yNzA2IDc4LjM5NzYsMCAxNDguMzE5OCwzOC4xMzk0IDE0Ni4yMDA5LDE4NC4zNDAzIHogbSAyLjExODksLTUyLjk3MTMgaCAxMjcuMTMxMiBjIDAsLTM2LjAyMDYgLTI3LjU0NTEsLTY1LjY4NDUgLTYzLjU2NTYsLTY1LjY4NDUgLTQ0LjQ5NTksMCAtNTkuMzI3OSwzMS43ODI4IC02MS40NDY3LDY1LjY4NDUgeiBtIDQ0Mi44NDAzLC0xMzEuMzY5IHYgODIuNjM1MyBjIC00NC40OTU5LC0yLjExODggLTk5LjU4NjEsLTYuMzU2NSAtOTkuNTg2MSw4Ni44NzMgdiAxNDguMzE5NyBoIC04MC41MTY0IHYgLTMxMS40NzE0IGggNzYuMjc4NyB2IDU1LjA5MDIgYyAyOS42NjQsLTUyLjk3MTMgNTkuMzI3OSwtNjMuNTY1NiAxMDEuNzA1LC02MS40NDY4IHogbSA0OC43MzM3LDYuMzU2NiBoIDgyLjYzNTIgdiAzMTEuNDcxNCBoIC04Mi42MzUyIHogbSAzNDcuNDkxOSwxMTIuMjk5MiBjIC02LjM1NjYsLTM2LjAyMDUgLTI3LjU0NTEsLTUwLjg1MjQgLTUyLjk3MTMsLTUwLjg1MjQgLTU3LjIwOTEsMCAtNjMuNTY1Niw1NS4wOTAxIC02My41NjU2LDk5LjU4NjEgMCw1OS4zMjc5IDE5LjA2OTcsOTMuMjI5NSA2MS40NDY3LDkzLjIyOTUgMzguMTM5NCwtMi4xMTg4IDQ2LjYxNDgsLTE0LjgzMiA1NS4wOTAyLC01NS4wOTAyIGggODIuNjM1MyBjIC0xMC41OTQzLDc0LjE1OTkgLTU5LjMyNzksMTIyLjg5MzUgLTEzOS44NDQzLDEyMi44OTM1IC05OS41ODYxLC0yLjExODggLTE0NC4wODIxLC02MS40NDY3IC0xNDQuMDgyMSwtMTYxLjAzMjggMCwtMTEyLjI5OTMgNTcuMjA5MSwtMTY3LjM4OTUgMTQ2LjIwMDksLTE2OS41MDgzIDk3LjQ2NzMsMCAxMzMuNDg3OCw0OC43MzM2IDEzOS44NDQzLDExOC42NTU4IHogbSAyNjAuNjE5LDEwLjU5NDMgYyAyNS40MjYyLC0yLjExODkgNDguNzMzNiwtMTAuNTk0MyA0OC43MzM2LC0zMS43ODI4IDAsLTMxLjc4MjggLTI5LjY2NCwtMzEuNzgyOCAtNTAuODUyNSwtMzMuOTAxNyAtNDAuMjU4MiwyLjExODkgLTQ0LjQ5NTksMTYuOTUwOSAtNTAuODUyNSw0NC40OTYgaCAtODAuNTE2NCBjIDYuMzU2NiwtNzYuMjc4OCA1Mi45NzEzLC0xMDguMDYxNiAxMzUuNjA2NiwtMTA4LjA2MTYgNjEuNDQ2OCwwIDEyOS4yNTAxLDIxLjE4ODYgMTI5LjI1MDEsODguOTkxOSB2IDE4NC4zNDAyIGMgMCwxNi45NTA5IDQuMjM3NywyMy4zMDc0IDE2Ljk1MDgsMzEuNzgyOCB2IDEyLjcxMzEgaCAtODguOTkxOCBjIC00LjIzNzcsLTEyLjcxMzEgLTQuMjM3NywtMjUuNDI2MiAtNi4zNTY2LC0zNi4wMjA1IC0yNy41NDUxLDI3LjU0NTEgLTU3LjIwOSw0Ni42MTQ4IC05Ny40NjczLDQ2LjYxNDggLTU5LjMyNzgsLTIuMTE4OCAtOTcuNDY3MiwtMzEuNzgyOCAtOTcuNDY3MiwtOTMuMjI5NSAyLjExODgsLTY5LjkyMjIgNDQuNDk1OSwtOTcuNDY3MyAxNDEuOTYzMiwtMTA1Ljk0MjcgeiBtIDQ4LjczMzYsMzguMTM5NCBjIC0xNi45NTA4LDEwLjU5NDIgLTM4LjEzOTQsMTQuODMxOSAtNTUuMDkwMiwxNi45NTA4IC0zMy45MDE2LDIuMTE4OCAtNTUuMDkwMiwxMi43MTMxIC01NS4wOTAyLDQ0LjQ5NTkgMi4xMTg5LDI5LjY2NCAxNi45NTA4LDQwLjI1ODIgNDAuMjU4Miw0MC4yNTgyIDU5LjMyNzksLTEwLjU5NDIgNzYuMjc4OCwtMzMuOTAxNiA2OS45MjIyLC0xMDEuNzA0OSB6IG0gNDM0LjM2NDksLTU3LjIwOTEgdiAyMDkuNzY2NSBoIC04Mi42MzUzIHYgLTE5MC42OTY4IGMgMi4xMTg5LC0zNi4wMjA1IC0xMC41OTQyLC02MS40NDY3IC01MC44NTI0LC02MS40NDY3IC01MC44NTI1LDAgLTYzLjU2NTYsNDIuMzc3IC02My41NjU2LDgyLjYzNTIgdiAxNjkuNTA4MyBoIC04Mi42MzUzIHYgLTMxMS40NzE0IGggODAuNTE2NCB2IDQ0LjQ5NTkgYyAxOS4wNjk3LC0zMy45MDE3IDQ4LjczMzYsLTUyLjk3MTQgOTMuMjI5NiwtNTIuOTcxNCA1OS4zMjc5LDIuMTE4OSAxMDUuOTQyNiwyMy4zMDc0IDEwNS45NDI2LDExMC4xODA0IHogbSAxOTQuOTM0NSwtNDYuNjE0OCBjIC0zMy45MDE2LDIuMTE4OSAtNDguNzMzNiwxMi43MTMyIC01Mi45NzEzLDQ0LjQ5NiBoIC03OC4zOTc2IGMgNi4zNTY2LC03Ni4yNzg4IDUyLjk3MTQsLTEwOC4wNjE2IDEzMy40ODc4LC0xMDguMDYxNiA0OC43MzM2LDAgMTMxLjM2ODksOC40NzU1IDEzMS4zNjg5LDk3LjQ2NzMgdiAxODIuMjIxNCBjIDIuMTE4OCw0LjIzNzcgMCwxNi45NTA4IDE0LjgzMiwyNy41NDUxIHYgMTIuNzEzMSBoIC04Ni44NzMgYyAtNi4zNTY2LC0xMi43MTMxIC02LjM1NjYsLTI1LjQyNjIgLTguNDc1NCwtMzguMTM5NCAtMjUuNDI2MywyOS42NjQgLTU1LjA5MDIsNDYuNjE0OCAtOTUuMzQ4NCw0OC43MzM3IC01NS4wOTAyLDAgLTk3LjQ2NzMsLTMzLjkwMTcgLTk3LjQ2NzMsLTkzLjIyOTYgMi4xMTg5LC03NC4xNTk4IDQ0LjQ5NTksLTkxLjExMDcgMTE0LjQxODEsLTEwMy44MjM4IDMzLjkwMTYsLTIuMTE4OCA3OC4zOTc2LC02LjM1NjYgNzguMzk3NiwtMzMuOTAxNiAwLC0zMy45MDE3IC0yNy41NDUxLC0zMy45MDE3IC01Mi45NzE0LC0zNi4wMjA2IHogbSAtNC4yMzc3LDEyMC43NzQ3IGMgLTIzLjMwNzQsMi4xMTg4IC01NS4wOTAyLDEwLjU5NDMgLTU1LjA5MDIsNDQuNDk1OSAwLDMzLjkwMTcgMjMuMzA3NCwzOC4xMzk0IDQwLjI1ODMsNDAuMjU4MiA1NS4wOTAxLC00LjIzNzcgNzIuMDQxLC0yOS42NjM5IDcyLjA0MSwtMTAxLjcwNDkgLTE5LjA2OTcsMTAuNTk0MiAtNDAuMjU4MiwxNC44MzE5IC01Ny4yMDkxLDE2Ljk1MDggeiBtIDI3MS4yMTMzLDM2LjAyMDUgYyA0LjIzNzcsNDQuNDk1OSAzOC4xMzkzLDQ2LjYxNDggNjUuNjg0NCw0Ni42MTQ4IDI3LjU0NTEsMCA1MC44NTI1LC04LjQ3NTQgNTAuODUyNSwtMjkuNjY0IDIuMTE4OCwtMjkuNjYzOSAtNDguNzMzNiwtMjkuNjYzOSAtOTUuMzQ4NCwtNDQuNDk1OSAtNDQuNDk1OSwtMTAuNTk0MyAtOTcuNDY3MywtMjcuNTQ1MSAtOTUuMzQ4NCwtODguOTkxOCA0LjIzNzcsLTgwLjUxNjUgNjkuOTIyMSwtMTAzLjgyMzkgMTI5LjI1LC0xMDMuODIzOSA4OC45OTE5LDAgMTMxLjM2ODksMzYuMDIwNiAxMzUuNjA2NywxMDEuNzA1IGggLTgwLjUxNjUgYyAtNC4yMzc3LC0yOS42NjM5IC0yMy4zMDc0LC00MC4yNTgyIC01NS4wOTAyLC00MC4yNTgyIC0zMy45MDE2LDAgLTUwLjg1MjQsMTAuNTk0MyAtNTAuODUyNCwyNS40MjYyIDAsMjUuNDI2MyAyNS40MjYyLDI1LjQyNjMgOTcuNDY3Miw0NC40OTYgNTkuMzI3OSwxNC44MzE5IDk1LjM0ODQsNDIuMzc3IDk3LjQ2NzMsOTMuMjI5NSAtNC4yMzc3LDgwLjUxNjQgLTYxLjQ0NjgsMTA1Ljk0MjcgLTEzOS44NDQ0LDEwNS45NDI3IC04OC45OTE4LDAgLTEzOS44NDQzLC0zOC4xMzk0IC0xNDEuOTYzMSwtMTEwLjE4MDQgeiBtIDU4Ni45MjIzLC05OS41ODYxIGMgLTQuMjM3NywtMzEuNzgyOCAtMTkuMDY5NywtNTAuODUyNSAtNTIuOTcxMywtNTAuODUyNSAtNTUuMDkwMiwwIC02My41NjU2LDUyLjk3MTMgLTYzLjU2NTYsOTkuNTg2MSAtMi4xMTg5LDQyLjM3NzEgMTIuNzEzMSw5My4yMjk2IDYxLjQ0NjcsOTMuMjI5NiA0Mi4zNzcxLDAgNDguNzMzNywtMjUuNDI2MyA1NS4wOTAyLC01NS4wOTAyIGggODIuNjM1NiBjIC04LjQ3Niw3NC4xNTk4IC01Ny4yMDkzLDEyMi44OTM1IC0xMzcuNzI1OCwxMjIuODkzNSAtMTE0LjQxOCwwIC0xNDYuMjAwOCwtODAuNTE2NSAtMTQ2LjIwMDgsLTE2MS4wMzI5IDAsLTk3LjQ2NzIgNDYuNjE0NywtMTY5LjUwODMgMTQ2LjIwMDgsLTE2OS41MDgzIDk5LjU4NjEsMCAxMzMuNDg3OCw0OC43MzM3IDEzOS44NDQ4LDExOC42NTU4IHogbSAyNzkuNjg4NiwyMDkuNzY2NSBjIC0xMTIuMjk5LDAgLTE1OC45MTQsLTc4LjM5NzYgLTE1OC45MTQsLTE2NS4yNzA2IDIuMTE5LC02OS45MjIyIDM2LjAyMSwtMTY1LjI3MDYgMTU4LjkxNCwtMTY1LjI3MDYgMTI1LjAxMiwwIDE1Ni43OTUsOTcuNDY3MyAxNTYuNzk1LDE2NS4yNzA2IC0yLjExOSw5My4yMjk2IC01MC44NTIsMTY1LjI3MDYgLTE1Ni43OTUsMTY1LjI3MDYgeiBtIDcyLjA0MSwtMTY1LjI3MDYgYyAwLC01MC44NTI1IC0xNC44MzIsLTk3LjQ2NzIgLTcyLjA0MSwtOTcuNDY3MiAtNTkuMzI4LDAgLTc0LjE2LDU1LjA5MDEgLTc0LjE2LDk3LjQ2NzIgMCw1MC44NTI1IDE5LjA3LDk3LjQ2NzMgNzQuMTYsOTcuNDY3MyA1Ny4yMDksMCA3Mi4wNDEsLTU1LjA5MDIgNzIuMDQxLC05Ny40NjczIHogbSA1ODYuOTIzLC01Mi45NzEzIHYgMjA3LjY0NzYgaCAtODIuNjM2IHYgLTE5Ny4wNTM0IGMgMCwtMjkuNjYzOSAtMTQuODMyLC01MC44NTI0IC00Ni42MTUsLTUwLjg1MjQgLTQwLjI1OCwwIC01MC44NTIsMjkuNjYzOSAtNTIuOTcxLDYxLjQ0NjcgdiAxODYuNDU5MSBoIC04Mi42MzUgdiAtMTg2LjQ1OTEgYyAyLjExOSwtMzMuOTAxNiAtNi4zNTcsLTYxLjQ0NjcgLTQ0LjQ5NiwtNjEuNDQ2NyAtNDguNzM0LDAgLTUyLjk3MSwyNy41NDUxIC01Mi45NzEsNjEuNDQ2NyB2IDE4Ni40NTkxIGggLTgyLjYzNiB2IC0zMDkuMzUyNiBoIDc4LjM5OCB2IDQ0LjQ5NTkgYyAyMS4xODgsLTMzLjkwMTYgNDQuNDk2LC01Mi45NzEzIDg4Ljk5MiwtNTIuOTcxMyA1NS4wOSwwIDY5LjkyMiwyMS4xODg1IDg0Ljc1NCw1Mi45NzEzIDIzLjMwNywtMzYuMDIwNSA1MC44NTIsLTUyLjk3MTMgOTUuMzQ4LC01Mi45NzEzIDI1LjQyNiwwIDk3LjQ2OCwxMC41OTQzIDk3LjQ2OCwxMTAuMTgwNCB6IE0gNjM4NS4xOTEyLDE4NzguNzA3OSB2IDc2LjI3ODcgaCAzMTg4Ljg3NDMgdiAtNzYuMjc4NyB6IG0gMCw1NTcuMjU4NCB2IDc2LjI3ODcgaCAzMTg4Ljg3NDMgdiAtNzYuMjc4NyB6Ig0KICAgICBpZD0icGF0aDItNiINCiAgICAgc3R5bGU9InN0cm9rZS13aWR0aDoyMS4xODg1MzM3ODtmaWxsOiNlNjAwMTQ7ZmlsbC1vcGFjaXR5OjEiDQogICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI4LjU0ODU4ODgiDQogICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI4LjU0ODU4ODgiIC8+DQo8L3N2Zz4NCg==" />
      </header>
      <form className={Styles.form}>
        <div className={Styles.inputWrap}>
          <input type="search" name="search" placeholder="Procure seu Filme" />
        </div>
        <button type="submit">Buscar</button>
      </form>
      <div className={Styles.errorWrap}>
        <span className={Styles.error}>Erro</span>
        <Loading />
      </div>
      <footer className={Styles.footer}>

      </footer>
    </div>
  )
}

export default Search
