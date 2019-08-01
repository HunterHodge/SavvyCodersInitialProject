export default function(state){
    return `
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="./About/">About</a></li>
    <li><a href="./Contact/">Contact</a></li>
    <li id="dropdown">
      Portfolio
      <ul>
        <li><a href="./Projects/">Project 1</a></li>
        <li><a href="#textType">Project 2</a></li>
        <li><a href="">Project 3</a></li>
      </ul>
    </li>
  </ul>
</nav>
`;
}
