function navbar() {
  return `<div class="nav_items">
    <div class="left_nav">
      <svg class="logo__wrike-logo" width="100" height="80" viewBox="0 0 571 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M340.6 99.6667H358.8V71.1185C358.8 53.8685 373.9 54.1711 381.8 55.4825V36.0132C369.2 34.9036 361.7 38.4343 358.3 45.2939H357.9L358 36.3158H340.5V99.6667H340.6Z" fill="currentColor"></path>
      <path d="M435 99.6667H446.4L465.2 75.7588L481.1 99.6667H502.3L477.3 62.9474L499.2 36.215H478.1L453.1 68.0922H452.7L452.9 4.53955H435V99.6667Z" fill="currentColor"></path>
      <path d="M229.5 99.6667H243.6L265.2 58.9123L286.1 99.6667H300.4L332.5 36.215H311.2L291.5 76.6667L272.8 36.215H257.5L237.8 76.8685L219.1 36.215H197.8L229.5 99.6667Z" fill="currentColor"></path>
      <path d="M406.1 27.136C412.286 27.136 417.3 22.0776 417.3 15.8378C417.3 9.59795 412.286 4.53955 406.1 4.53955C399.915 4.53955 394.9 9.59795 394.9 15.8378C394.9 22.0776 399.915 27.136 406.1 27.136Z" fill="currentColor"></path>
      <path d="M415.101 36.215H397.101V99.6667H415.101V36.215Z" fill="currentColor"></path>
      <path d="M42.2 41.6624C50.9 41.6624 55 43.2764 61.3 49.6317L95.1 83.7281C96.1 84.7369 96.3 85.1404 96.5 85.7457C96.6 85.9474 96.6 86.2501 96.6 86.4518C96.6 86.6536 96.6 86.9562 96.5 87.158C96.3 87.7632 96.1 88.1667 95.1 89.1755L72 112.579C71 113.588 70.6 113.79 70 113.991C69.8 114.092 69.5 114.092 69.3 114.092C69.1 114.092 68.8 114.092 68.6 113.991C68 113.79 67.6 113.588 66.6 112.579L1.09999 46.5045C-0.800013 44.5878 -0.100013 41.6624 3.09999 41.6624H42.2Z" fill="#08CF65"></path>
      <path d="M137.6 4.711e-05C128.9 4.711e-05 124.8 1.61408 118.5 7.96935L84.7002 42.0658C83.7002 43.0746 83.5002 43.4781 83.3002 44.0834C83.2002 44.2851 83.2002 44.5878 83.2002 44.7895C83.2002 44.9913 83.2002 45.2939 83.3002 45.4957C83.5002 46.1009 83.7002 46.5044 84.7002 47.5132L107.8 70.8158C108.8 71.8246 109.2 72.0264 109.8 72.2281C110 72.329 110.3 72.329 110.5 72.329C110.7 72.329 111 72.329 111.2 72.2281C111.8 72.0264 112.2 71.8246 113.2 70.8158L178.7 4.74127C180.6 2.82461 179.9 -0.10083 176.7 -0.10083H137.6V4.711e-05Z" fill="#08CF65"></path>
      <path d="M553.4 78.5834C551.2 81.9124 546.6 86.0483 538.9 86.0483C529.9 86.0483 523.5 80.8027 522.1 73.2369H571C571 71.9255 571 70.0089 571 68.1931C571 49.8334 557.9 35.1053 538.5 35.1053C519.5 35.1053 504.8 49.6317 504.8 68.1931C504.8 86.6536 519.2 101.281 538.5 101.281C552.9 101.281 561.6 95.5308 567.2 88.1668L553.4 78.5834ZM537.5 49.329C545.8 49.329 551.6 53.9694 553.6 60.6273H521.3C523.3 53.9694 529 49.329 537.5 49.329Z" fill="currentColor"></path>
    </svg>
      <span>help center</span>
    </div>
    <div class="right_nav">
      <div id="country">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7.5" stroke="#fff"></circle>
        <path d="M8 0.5V15.5" stroke="#fff"></path>
        <path d="M15.5 8L0.5 8" stroke="#fff"></path>
        <path d="M14 4L2 4" stroke="#fff" stroke-linecap="round"></path>
        <path d="M14 12L2 12" stroke="#fff" stroke-linecap="round"></path>
        <path d="M6 1C6 1 4 4.5 4 8C4 11.5 6 15 6 15" stroke="#fff" stroke-linecap="round"></path>
        <path d="M10 1C10 1 12 4.5 12 8C12 11.5 10 15 10 15" stroke="#fff" stroke-linecap="round"></path>
      </svg>
      <select id="select_country">
       <option value="English">English</option>
       <option value="">Deutsch</option>
       <option value="English">Español</option>
       <option value="English">Français</option>
       <option value="English">Italiano</option>
    </select>
      <button class="nav_btn" id="submit">  <a href="ticket_form.html">Submit a Request</a></button>
      <button class="nav_btn">Sign in with Wrike</button>
    </div>
  </div>`;
}

export default navbar;
