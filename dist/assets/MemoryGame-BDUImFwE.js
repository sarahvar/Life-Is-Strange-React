import{r as t,M as o,j as s}from"./index-Cmqdr8qm.js";const x=()=>{const{cards:r,flippedCards:c,matchedCards:d,flipCard:l,elapsedTime:a,isGameComplete:i,resetGame:m}=t.useContext(o);return s.jsxs("div",{className:"memory-game",children:[s.jsxs("div",{className:"game-header",children:[s.jsx("h1",{children:"Jeu de Mémoire"}),s.jsxs("div",{className:"game-controls",children:[s.jsxs("h2",{children:["Temps écoulé : ",a]}),s.jsx("button",{className:"reset-button",onClick:m,children:"Nouvelle partie"})]})]}),s.jsx("div",{className:"grid",children:r.map((n,e)=>s.jsx("div",{className:`card ${c.includes(e)||d.includes(e)?"flipped":""}`,onClick:()=>l(e),children:s.jsxs("div",{className:"card-inner",children:[s.jsx("div",{className:"card-front"}),s.jsx("div",{className:"card-back",children:s.jsx("img",{src:n.src,alt:"Card"})})]})},e))}),i&&s.jsx("div",{className:"victory-message",children:s.jsxs("h2",{children:["Bravo, vous avez gagné en ",a,"!"]})})]})};export{x as default};