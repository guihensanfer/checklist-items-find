# checklist-items-find
Find items by value and description into your list, without postback. The method also can use into Dropdown Asp Net element. See the exemple below shows an button with onclick event using the method to find items into a check list component.

```javascript

document.getElementById("myButton").onclick = function(){
  BuscarItemPorTermoBusca(document.getElementById("myCheckListId"), // Your list, can be a checklist, radiolist ...
      "find value", // Find value
      true); // If will also equals the item description
}
  
```

If you are developing your web project in Asp Net, Postback maybe reset the Javascript events over your DOM elements. To fix this, you can see: https://forum.jquery.com/topic/why-my-jquery-code-doesn-t-work-with-updatepanel-post-back
