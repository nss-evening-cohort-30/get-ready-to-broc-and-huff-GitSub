export const pinnedRepoForm = `
  <div>
    <h3 class="text-white">Create a New Pinned Repository</h3>
    <p class="text-white">Use the form below to create a new repository that will be pinned to your profile.</p>
  </div>
  <form id="pinned-form">
    <div class="form-group mb-3">
      <label for="title" class="text-white">Title: </label>
      <input type="text" class="form-control" id="title" required>
    </div>
    <div class="form-group mb-3">
      <label for="description" class="text-white">Description (Optional): </label>
      <textarea class="form-control" rows="4" id="description"></textarea>
    </div>
    <div class="form-group mb-3">
      <label for="sel1" class="text-white">Programming Language: (Select One)</label>
      <select class="form-control" id="sel1" required>
        <option>Javascript</option>
        <option>Python</option>
        <option>Java</option>
        <option>PHP</option>
      </select>
    </div>
    <button type="submit">Create Repo</button>
  </form>
`;
