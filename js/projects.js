/* =====================================================================
   projects.js – only used by projects.html
   Makes the filter pills (All / Excel / Power BI / SQL Server) work.

   HOW IT WORKS
   - Each pill in the HTML has   data-filter="excel"   (or all, powerbi, sql)
   - Each project card has       data-category="powerbi excel"
     (a card can belong to several categories, separated by spaces)
   - Clicking a pill shows only the cards whose data-category contains
     that word, and hides the others.

   ADDING A NEW FILTER? Add a <button data-filter="python"> in the HTML
   and use the word "python" in the data-category of matching cards.
   No change is needed in this file.
   ===================================================================== */

(function setupProjectFilter() {
  // Grab the pills, the cards and the "nothing here yet" message
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  const emptyNote = document.querySelector(".empty-note");
  if (!buttons.length || !cards.length) return;

  /* ---- Show only the cards that match the chosen filter ---- */
  function applyFilter(filter) {
    let visibleCount = 0;

    cards.forEach((card) => {
      // Turn "powerbi excel" into ["powerbi", "excel"]
      const categories = (card.dataset.category || "").split(/\s+/);
      const show = filter === "all" || categories.includes(filter);

      card.hidden = !show; // hidden cards are removed from the layout
      if (show) visibleCount++;
    });

    // Highlight the active pill (white) and un-highlight the rest
    buttons.forEach((btn) => {
      const active = btn.dataset.filter === filter;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    // Show a friendly message when a category has no projects yet
    if (emptyNote) emptyNote.classList.toggle("is-visible", visibleCount === 0);
  }

  /* ---- Click handling for every pill ---- */
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyFilter(btn.dataset.filter);
      // Remember the choice in the address bar (projects.html#excel)
      history.replaceState(null, "", "#" + btn.dataset.filter);
    });
  });

  /* ---- Open with a filter already chosen, e.g. projects.html#powerbi
          (handy for linking straight to one category) ---- */
  const fromUrl = location.hash.replace("#", "");
  const valid = Array.from(buttons).some((b) => b.dataset.filter === fromUrl);
  applyFilter(valid ? fromUrl : "all");
})();
