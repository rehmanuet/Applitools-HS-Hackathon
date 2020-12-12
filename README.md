# Applitools Holiday Shopping Hackathon Cypress


#### Stack
<img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/applitools-logo.png?raw=true" height="90"/><img src="https://avatars0.githubusercontent.com/u/8908513?s=200&v=4?raw=true" height="85" />    <img src="https://i.pinimg.com/originals/48/4d/9a/484d9a03c676a55671a9d257a48c4378.png?raw=true?raw=true" width="110" height="70"/><img src="https://camo.githubusercontent.com/58045a79a69afea4cab1cea6def6d911fba3956cf5fd683addf41c032aa64088/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667?raw=true" height="90" />

#### Setup
1. Clone the Repo<br />
`$ git clone git@github.com:rehmanuet/Applitools-HS-Hackathon.git`<br/>
2. Open the Project<br />
3. Install the dependencies from package.json<br />
 `$ npm install`<br />
4. Set the environment variable APPLITOOLS_API_KEY <br/>
`set $APPLITOOLS_API_KEY = <KEY_FROM_APPLITOOLS_DASHBOARD>`<br/>
5. Use following commands to run test <br/>

 | <b><sub>Applifashion App Version</sub></b> |    <b><sub>Command</sub>   </b> | <b><sub>Batch Test Results URL</sub></b> |
 | :-: | :-: | :-: |
 |     <sub>V1 Production Version</sub>    | <sub>npm run task:v1</sub>  | <sub>[Part 1](https://eyes.applitools.com/app/test-results/00000251794584931554?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&display=details&top=00000251794507287201%283%29)</sub>  |
 |     <sub>Dev-Branch Version</sub>   |     <sub>npm run task:dev</sub>          |<sub>[Part 2](https://eyes.applitools.com/app/test-results/00000251794583948126?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&display=details&top=00000251794507287201%283%29)</sub>  |
 | <sub>Final Production Version</sub> | <sub>npm run task:final</sub>   |<sub>[Part 3](https://eyes.applitools.com/app/test-results/00000251794507287201?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&display=details&top=00000251794507287201%283%29)</sub>  |





#### Root Cause Analysis
|   <sub> RCA of Test 3 </sub>   |
| :-:  | 
|     <sub>[RCA for Description and Rating issue](https://eyes.applitools.com/app/test-results/00000251794583948126/00000251794583916341/steps/1/edit?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&diff=eyJkaWZmIjp7InRvcCI6ODE2LjMwNDg3ODA0ODc4MDQsImxlZnQiOjE0Ljk5OTk5OTk5OTk5OTk5OCwid2lkdGgiOjM3LCJoZWlnaHQiOjI0LjM5MDI0MzkwMjQzOTAyNX0sInZpZXdNb2RlIjoiYWN0dWFsIn0%3D)</sub> |
|     <sub>[RCA for Discount Percentage's badge](https://eyes.applitools.com/app/test-results/00000251794583948126/00000251794583916341/steps/1/edit?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&diff=eyJkaWZmIjp7InRvcCI6NzcyLCJsZWZ0Ijo4ODksIndpZHRoIjo4OCwiaGVpZ2h0IjoyMH0sInZpZXdNb2RlIjoiZXhwZWN0ZWQifQ%3D%3D)</sub>   |
| <sub>[RCA for Add to cart button's Top Margin alignment](https://eyes.applitools.com/app/test-results/00000251794583948126/00000251794583916341/steps/1/edit?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&diff=eyJkaWZmIjp7InRvcCI6NzQ4LjAwMDM3NDk4MTI1MSwibGVmdCI6MTA2Mywid2lkdGgiOjEyMywiaGVpZ2h0IjoxNC45OTkyNTAwMzc0OTgxMjV9LCJ2aWV3TW9kZSI6ImFjdHVhbCJ9&mode=step-editor)</sub> |

