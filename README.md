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
 |     <sub>V1 Production Version</sub>    | <sub>npm run task:v1</sub>  | <sub>[Part 1](https://eyes.applitools.com/app/test-results/00000251794497338101?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&display=details&top=00000251794453703011%283%29)</sub>  |
 |     <sub>Dev-Branch Version</sub>   |     <sub>npm run task:dev</sub>          |<sub>[Part 2](https://eyes.applitools.com/app/test-results/00000251794496956257?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&display=details&top=00000251794453703011%283%29)</sub>  |
 | <sub>Final Production Version</sub> | <sub>npm run task:final</sub>   |<sub>[Part 3](https://eyes.applitools.com/app/test-results/00000251794453703011?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&display=details&top=00000251794453703011%283%29)</sub>  |





#### Root Cause Analysis
|   <sub> RCA of Test 3 </sub>   |
| :-:  | 
|     <sub>[RCA for Description and Rating issue](https://eyes.applitools.com/app/test-results/00000251794496956257/00000251794496924548/steps/1/edit?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&diff=eyJkaWZmIjp7InRvcCI6NzcxLjQ5ODQ5OTg0OTk4NDksImxlZnQiOjU3LjQ5ODQ5OTg0OTk4NDk5NSwid2lkdGgiOjMwLjAwMzAwMDMwMDAzMDAwMywiaGVpZ2h0IjozMC4wMDMwMDAzMDAwMzAwMDN9LCJ2aWV3TW9kZSI6ImFjdHVhbCJ9&mode=step-editor)</sub> |
|     <sub>[RCA for Discount Percentage's badge](https://eyes.applitools.com/app/test-results/00000251794496956257/00000251794496924548/steps/1/edit?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&diff=eyJkaWZmIjp7InRvcCI6NzcyLjAwMDAwMDAwMDAwMDEsImxlZnQiOjg4OSwid2lkdGgiOjg4LCJoZWlnaHQiOjIwfSwidmlld01vZGUiOiJhY3R1YWwifQ%3D%3D&mode=step-editor)</sub>   |
| <sub>[RCA for Add to cart button's Top Margin alignment](https://eyes.applitools.com/app/test-results/00000251794496956257/00000251794496924548/steps/1/edit?accountId=ATz47TlcMkiN9X94Ra6-Bg~~&diff=eyJkaWZmIjp7InRvcCI6NzkxLCJsZWZ0IjoxMDY0LCJ3aWR0aCI6MTIxLCJoZWlnaHQiOjEwfSwidmlld01vZGUiOiJhY3R1YWwifQ%3D%3D&mode=step-editor)</sub> |

