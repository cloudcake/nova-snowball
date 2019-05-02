window.addEventListener('load', function() {
  const sidebarGroups = document.querySelectorAll('.w-sidebar h4:not(.expanded)')

  for (var i = 0; i < sidebarGroups.length; i++) {
    sidebarGroups[i].addEventListener('click', function() {
      var thisWasExpanded = this.classList.contains('expanded')

      for (var x = 0; x < sidebarGroups.length; x++) {
        sidebarGroups[x].classList.remove('expanded')
      }

      if (thisWasExpanded) {
        this.classList.remove('expanded')
      } else {
        this.classList.add('expanded')
      }
    })
  }

  var activeSidebarGroup = document.querySelector('.w-sidebar .router-link-exact-active');

  if (activeSidebarGroup) {
    var nearestList = activeSidebarGroup.closest('ul')

    if (nearestList && nearestList.previousElementSibling) {
      nearestList.previousElementSibling.classList.add('expanded')
    }
  }
})
