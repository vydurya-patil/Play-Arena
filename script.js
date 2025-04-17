
    function toggleWorkOptions() {
      const notReturned = document.getElementById('not-returned');
      const noTimeOff = document.getElementById('no-time-off');
      const recoverySection = document.getElementById('recovery-section');
      const workDateInput = document.getElementById('work-date');

      // Show recovery section if not returned or missed time
      if (notReturned.checked || noTimeOff.checked) {
        recoverySection.style.display = "block";
      } else {
        recoverySection.style.display = "none";
      }

      // Disable/enable return to work date if applicable
      if (notReturned.checked) {
        workDateInput.disabled = true;
      } else {
        workDateInput.disabled = false;
      }
    }

    function toggleWorkDate() {
      const returnedWork = document.getElementById('returned-work');
      const workDateInput = document.getElementById('work-date');

      if (returnedWork.checked) {
        workDateInput.disabled = false;
      } else {
        workDateInput.disabled = true;
      }
    }
