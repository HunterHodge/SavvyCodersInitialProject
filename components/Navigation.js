
function linkBuilder(links){
    return links.map(function linkHandler(link){
        return `<li>${link}</li>`;
    }).join('');
}
export default function(state){
    return `
<nav>
  <ul>
  ${linkBuilder(state.links.primary)}
    <li id="dropdown">
      Portfolio
      <ul>
        ${linkBuilder(state.links.dropdown)}
      </ul>
    </li>
  </ul>
</nav>
`;
}
