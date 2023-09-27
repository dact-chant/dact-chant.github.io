window.onclick = function(event) {
  var activitiesDropdown = document.getElementById("activitiesDropdown");
  var participantsDropdown = document.getElementById("participantsDropdown");

  if (event.target.matches('.activities-dropdown-button')) {
    // someone has clicked on activitiesDropdown
    if (activitiesDropdown.classList.contains('show')) {
      // activitiesDropdown is currently activated, so deactivate it.
      activitiesDropdown.classList.remove('show');
    } else {
      // activitiesDropdown is currently not activated, so activate it.
      activitiesDropdown.classList.add('show');
    }
  } else {
    // the click was somewhere other than activitiesDropdown, so deactivate it.
    if (activitiesDropdown.classList.contains('show')) {
      activitiesDropdown.classList.remove('show');
    }
  }

  if (event.target.matches('.participants-dropdown-button')) {
    // someone has clicked on participantsDropdown
    if (participantsDropdown.classList.contains('show')) {
      // participantsDropdown is currently activated, so deactivate it.
      participantsDropdown.classList.remove('show');
    } else {
      // participantsDropdown is currently not activated, so activate it.
      participantsDropdown.classList.add('show');
    }
  } else {
    // the click was somewhere other than participantsDropdown, so deactivate it.
    if (participantsDropdown.classList.contains('show')) {
      participantsDropdown.classList.remove('show');
    }
  }
}
