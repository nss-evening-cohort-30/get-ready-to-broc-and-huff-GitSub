export const repoForm = `
  <div>
    <h3 class="text-white">Create a New Repository</h3>
    <p class="text-white">Repository names are short and memorable, often with dashes (-) or underscores ( _ ) in between words.</p>
  </div>
  <form id="repo-form">
    <div class="form-group mb-3">
      <label for="title" class="text-white">Title: </label>
      <input type="text" class="form-control" id="title" required>
    </div>
    <div class="form-group mb-3">
      <label for="description" class="text-white">Description (Optional): </label>
      <textarea class="form-control" rows="4" id="description"></textarea>
    </div>  
    <button type="submit">Create Repo</button>
  </form>
`;
