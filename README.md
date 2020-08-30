# Mintbean Hackathons: Javascript Bootcamp Olympics

Project submission time is from 11:00AM - 11:30AM EST

---

Link to the Challenge Doc

- https://sites.google.com/mintbean.io/javascriptbootcampolympics/home

Link to the mintbean-cli documentation

- https://www.npmjs.com/package/mintbean-cli

Link to our REPO

- https://github.com/g-thinh/cb-kanban-mintbean

---

## QUICK START

this is just to get everyone started on creating branches, fetch master repo, and start committing new code.

- git pull origin master
- git checkout -b [insert branch name]
- git add .
- git commit -m "insert message here"
- git push origin [insert branch name]
- on REPO, create Merge Pull Request and check for conflicts.

No need for peer review if you know for sure this wont brick anything. Once you are done and want to keep going.

- git checkout master
- git pull origin master
- and so on...

## PROGRESS SO FAR

- Added routing to "/" landing page component and "/board/ to go to the kanban board component
- Added packages, redux, redux-react, styled-components, spring
- Added GlobalStyles component that does our CSS Reset + Box Model sizing, imported "Lato" google fonts as default font.

# FEATURES TO IMPLEMENT

- ~~When the application starts, you have 3 empty columns: "Todo", "In progress", "Done"~~

- ~~Each column has a "+" button. The user can click this button to create a task card in any column~~

- ~~Task cards clearly display the title of the contained task~~

- ~~The user can move tasks between columns using drag-and-drop~~

- The user can delete a task. (Andres)

- The user can expand a task card to see its description (Andres)

- ~~The user can move tasks between columns using the "Move" button in the context menu~~

- ~~The user can edit column titles~~

- ~~The user can create columns~~

- ~~The user can change the order of columns using drag-and-drop~~

- ~~The user can delete columns (you will have to decide what happens to a column's cards in this case)~~

- Add additional UI to enhance UX like

  - ~~Tooltips~~
  - ~~Clear All~~
  - Info bubble (dont really need)

- ~~Create a landing Page~~

  # NEW FEATURES LEFT

- ~~Get Started button launches user form to enter Kanban Board name~~ (Thinh)

- ~~Warning when you close a column using a snackbar~~ - (Thinh)

- ~~Mobile responsive~~ - (Adonis)

- Centering the board - (Thinh)

- Dark Mode light mode (low priority)

- Set tasks by priority (low priority)

# BONUS FEATURES

- The site is mobile-responsive (highly recommended but not required)

- Each card has a context menu you can access through right-click (desktop).

- Each card has a context menu you can access through long-press (mobile).

- Nice animations (transition animation?)

- The user can access the context menu using right-click

- The user can add images as attachments to the cards (yes, it is possible to save images to localstorage, https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page)

- Data is saved to LocalStorage or IndexedDB (to avoid collisions when using FeaturePeek, please use a unique name for the namespace you're saving your data to) - (Adonis)

- Tutorial on the landing Page (IMPORTANT! - Thinh)
