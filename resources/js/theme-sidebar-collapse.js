var snowballSidebarResourceGroups;
var snowballSidebarHeadings;
var snowballSidebarMainMenus;

window.addEventListener('load', function() {
  snowballSidebarMainMenus = document.querySelectorAll('.w-sidebar h3:not(.expanded)')
  snowballSidebarResourceGroups = document.querySelectorAll('.w-sidebar h4:not(.expanded)')
  snowballSidebarHeadings = document.querySelectorAll('.w-sidebar h3:not(.cursor-pointer)')

  registerMainMenusNavigation()
  registerResourceGroupsNavigation()
  registerResourceActiveLinks()
})

function registerMainMenusNavigation() {
  snowballSidebarMainMenus.forEach(function(group) {
    group.addEventListener('click', function() {
      var thisWasExpanded = this.classList.contains('expanded')

      snowballSidebarMainMenus.forEach(function(otherGroup) {
        otherGroup.classList.remove('expanded')
      })

      snowballSidebarResourceGroups.forEach(function(otherGroup) {
        otherGroup.classList.remove('expanded')
      })

      if (!thisWasExpanded) {
        this.classList.remove('expanded')
      } else {
        this.classList.add('expanded')
      }
    })
  })
}

function registerResourceGroupsNavigation() {
  snowballSidebarResourceGroups.forEach(function(group) {
    group.addEventListener('click', function() {
      var thisWasExpanded = this.classList.contains('expanded')

      snowballSidebarResourceGroups.forEach(function(otherGroup) {
        otherGroup.classList.remove('expanded')
      })

      if (thisWasExpanded) {
        this.classList.remove('expanded')
      } else {
        this.classList.add('expanded')
      }
    })
  })
}

function registerResourceActiveLinks() {

  snowballSidebarHeadings.forEach(function(sidebarHeading) {

    if ((activeLink = document.querySelector('.w-sidebar ul .router-link-active'))) {
      const nearestUnorderedList = activeLink.closest('ul')

      if (nearestUnorderedList && nearestUnorderedList.previousElementSibling) {
        nearestUnorderedList.previousElementSibling.classList.add('expanded')

        var sibling = nearestUnorderedList.previousElementSibling

        for (var z = 0; z < nearestUnorderedList.parentNode.childNodes.length; z++) {
          if (sibling.tagName == 'H3') {
            sibling.classList.add('expanded')
            break;
          }

          sibling = sibling.previousElementSibling
        }
      }
    }

    sidebarHeading.classList.add('cursor-pointer')
    sidebarHeading.addEventListener('click', function() {
      var thisWasExpanded = this.classList.contains('expanded')

      for (var x = 0; x < snowballSidebarResourceGroups.length; x++) {
        snowballSidebarResourceGroups[x].classList.remove('expanded')
      }

      if (thisWasExpanded) {
        this.classList.remove('expanded')
      } else {
        this.classList.add('expanded')
      }
    })
  })
}
