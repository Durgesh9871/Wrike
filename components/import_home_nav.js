
// NAVIGATION BAR 

let home_nav_copy_import = ()=>{
    return `<div id="nav_div_1">
    <div id="wrike_img">
        <a href="index.html"> <svg _ngcontent-TP_FE-c90="" width="128" height="35" viewBox="0 0 128 35"
                fill="none" xmlns="http://www.w3.org/2000/svg" class="header-logo__image">
                <g _ngcontent-TP_FE-c90="" clip-path="url(#clip0)">
                    <path _ngcontent-TP_FE-c90=""
                        d="M49.06 32.17c1.05 0 1.54-.76 1.54-.76v.66h.71v-3.04c0-1.05-.81-1.86-1.89-1.86-1.15 0-1.8.9-1.8.9l.44.44s.5-.71 1.34-.71c.7 0 1.2.5 1.2 1.2l-1.86.3c-.89.15-1.38.65-1.38 1.43.02.74.7 1.44 1.7 1.44zm0-.65c-.66 0-1-.34-1-.76 0-.45.3-.73.9-.84l1.64-.29v.3c.03.93-.63 1.59-1.54 1.59zM58.4 32.17c1.9 0 2.91-1.44 2.91-1.44l-.5-.44s-.8 1.2-2.4 1.2a2.84 2.84 0 01-2.86-2.9 2.88 2.88 0 015.21-1.7l.5-.45S60.32 25 58.41 25c-2 0-3.6 1.6-3.6 3.59 0 1.99 1.6 3.58 3.6 3.58zM62.5 32.07h.7v-4.8h-.7v4.8zm.36-5.95c.26 0 .45-.2.45-.44a.46.46 0 00-.45-.45.46.46 0 00-.45.45c0 .23.19.44.45.44zM66.53 32.17c.36 0 .68-.15.68-.15v-.66s-.29.16-.66.16c-.39 0-.65-.26-.65-.76V27.9h1.05v-.65H65.9v-1.6h-.66v1.1c0 .34-.15.5-.39.5h-.55v.65h.9v2.86c0 .92.49 1.41 1.33 1.41zM68.41 32.07h.71v-2.65c0-.94.7-1.54 1.5-1.54h.28v-.7h-.2c-1.1 0-1.6.75-1.6.75v-.65h-.71v4.79h.02zM71.85 32.07h.7v-4.8h-.7v4.8zm.34-5.95c.26 0 .44-.2.44-.44s-.2-.45-.44-.45a.46.46 0 00-.45.45c0 .23.21.44.45.44zM73.5 32.07h.83l1.4-1.94 1.38 1.94h.84l-1.81-2.49 1.65-2.3H77l-1.25 1.75-1.26-1.75h-.84l1.65 2.3-1.8 2.49zM82.9 32.17c1.26 0 1.99-1 1.99-1l-.5-.44s-.55.82-1.5.82c-.88 0-1.7-.82-1.7-1.86 0-1.05.82-1.86 1.7-1.86.95 0 1.45.8 1.45.8l.5-.49s-.71-.94-1.94-.94a2.45 2.45 0 00-2.41 2.49c0 1.38 1.1 2.48 2.4 2.48zM87.98 32.17c1.33 0 2.43-1.1 2.43-2.48 0-1.4-1.1-2.5-2.43-2.5a2.46 2.46 0 00-2.44 2.5c0 1.38 1.1 2.48 2.44 2.48zm0-.65c-.94 0-1.76-.81-1.76-1.86s.82-1.86 1.76-1.86c.94 0 1.75.81 1.75 1.86s-.78 1.86-1.75 1.86zM91.7 32.07h.7v-2.65c0-1 .6-1.6 1.31-1.6.71 0 1.2.5 1.2 1.4v2.85h.72v-2.65c0-1 .6-1.6 1.3-1.6.71 0 1.21.5 1.21 1.4v2.85h.7v-2.86c0-1.33-.8-2.04-1.85-2.04-1.2 0-1.65.84-1.65.84s-.4-.84-1.55-.84c-.94 0-1.33.7-1.33.7v-.6h-.71v4.8h-.05zM100.37 34.17h.7v-2.8s.55.8 1.65.8c1.31 0 2.36-1.04 2.36-2.48s-1.05-2.5-2.36-2.5c-1.1 0-1.65.82-1.65.82v-.7h-.7v6.86zm2.35-2.65c-.83 0-1.65-.81-1.65-1.86s.82-1.86 1.65-1.86c.9 0 1.66.76 1.66 1.86 0 1.13-.77 1.86-1.66 1.86zM107.67 32.17a1.9 1.9 0 001.55-.76v.66h.7v-3.04c0-1.05-.8-1.86-1.88-1.86-1.15 0-1.8.9-1.8.9l.44.44s.5-.71 1.33-.71c.71 0 1.2.5 1.2 1.2l-1.85.3c-.9.15-1.39.65-1.39 1.43 0 .74.7 1.44 1.7 1.44zm0-.65c-.65 0-1-.34-1-.76 0-.45.3-.73.9-.84l1.65-.29v.3c0 .93-.66 1.59-1.55 1.59zM111.5 32.07h.7v-2.65c0-.94.66-1.6 1.5-1.6.76 0 1.31.56 1.31 1.4v2.85h.7v-2.86c0-1.25-.8-2.04-1.93-2.04-1.05 0-1.55.81-1.55.81v-.7h-.7v4.79h-.03zM117.44 34.17c.71 0 1.1-.4 1.5-1.4l2.2-5.5h-.76l-1.55 3.9-1.54-3.9h-.73l1.93 4.8-.26.7c-.18.5-.44.77-.89.77-.26 0-.5-.1-.5-.1v.65c.03 0 .27.08.6.08z"
                        fill="#2B3857" class="header-logo__svg-path header-logo__svg-path--logo-copy"></path>
                    <path _ngcontent-TP_FE-c90=""
                        d="M77.82 21.8v-6.26c0-3.77 3.27-3.72 5-3.43V7.87c-2.72-.24-4.35.52-5.1 2.04h-.09l.03-1.96h-3.8V21.8h3.96zM94.37 21.8h2.46l4.09-5.24 3.45 5.24h4.59l-5.42-8.04 4.74-5.84h-4.59l-5.42 6.97h-.08L98.25.98h-3.88V21.8zM49.76 21.8h3.07l4.69-8.93 4.53 8.93h3.09L72.1 7.92H67.5l-4.27 8.85-4.06-8.85h-3.33l-4.27 8.9-4.06-8.9h-4.6l6.85 13.88zM88.08 5.93c1.34 0 2.44-1.1 2.44-2.46 0-1.36-1.1-2.46-2.44-2.46a2.45 2.45 0 00-2.43 2.46c0 1.36 1.1 2.46 2.43 2.46zM90.05 7.92h-3.9V21.8h3.9V7.92zM120.04 17.2a3.62 3.62 0 01-3.15 1.62c-1.96 0-3.35-1.16-3.64-2.8h10.61v-1.1c0-4.01-2.83-7.24-7.05-7.24a7.18 7.18 0 00-7.3 7.23 7.15 7.15 0 007.3 7.23c3.12 0 5-1.25 6.24-2.88l-3.01-2.07zm-3.46-6.42c1.8 0 3.06 1.02 3.48 2.46h-7.02a3.52 3.52 0 013.54-2.46z"
                        fill="#000" class="header-logo__svg-path header-logo__svg-path--logo-copy"></path>
                    <path _ngcontent-TP_FE-c90=""
                        d="M9.14 9.1c1.89 0 2.78.34 4.14 1.75l7.33 7.47c.21.2.27.31.32.44.02.06.02.1.02.16 0 .05 0 .1-.02.16-.05.13-.08.2-.32.44l-5 5.11c-.2.21-.31.26-.44.32-.06.02-.11.02-.16.02s-.1 0-.16-.02c-.13-.06-.2-.08-.44-.32L.24 10.17c-.42-.42-.27-1.04.44-1.04h8.46V9.1zM29.83-.02c-1.88 0-2.77.34-4.14 1.76L18.36 9.2c-.2.21-.26.32-.31.45-.03.05-.03.1-.03.16 0 .05 0 .1.03.15.05.13.07.21.31.45l5 5.1c.21.22.32.27.45.32.05.03.1.03.16.03.05 0 .1 0 .15-.03.13-.05.21-.08.45-.31l14.2-14.49c.41-.42.26-1.05-.45-1.05h-8.49z"
                        fill="#08CF65" class="header-logo__svg-path"></path>
                    <path _ngcontent-TP_FE-c90=""
                        d="M125.93 7.9a2.01 2.01 0 100-4.04 2.01 2.01 0 100 4.03zm0-.37c-.89 0-1.62-.74-1.62-1.63 0-.89.73-1.62 1.62-1.62.9 0 1.62.73 1.62 1.62 0 .9-.73 1.63-1.62 1.63zm-.73-.6h.42v-.74h.39l.4.73h.44l-.47-.83s.39-.13.39-.55c0-.37-.32-.68-.73-.68h-.84v2.06zm.42-1.1v-.56h.41c.19 0 .32.1.32.3 0 .15-.1.28-.31.28h-.42v-.03z"
                        fill="#000" class="header-logo__svg-path header-logo__svg-path--logo-copy"></path>
                </g>
                <defs _ngcontent-TP_FE-c90="">
                    <clipPath _ngcontent-TP_FE-c90="" id="clip0">
                        <path _ngcontent-TP_FE-c90="" fill="#fff" d="M0 0h128v35H0z"
                            class="header-logo__svg-path header-logo__svg-path--logo-copy"></path>
                    </clipPath>
                </defs>
            </svg></a>
    </div> 
    <!-- div---1  -->
    <!-- <div id="product_drop"> -->
    <div id="product_drop">Product <i class="fas fa-caret-down" style="margin-left:8px ;"></i>
        <div class="dropdown_menu_Product">
            <div><a href="#">Take a tour</a> </div>
            <div><a href="#">Features</a></div>
            <div><a href="#">Project Templates</a></div>
            <div><a href="#">Apps & Integration</a></div>
        </div>
    </div>
    <!-- </div> -->

    <!-- div---2  -->

    <div id="solution_drop">Solutions <i class="fas fa-caret-down" style="margin-left:8px ;"></i>
        <div class="dropdown_menu_solution">
            <div class="dropdown_menu_solution_1">
                <h3>Teams</h3>
                <div><a href="#">Project Manager</a></div>
                <div><a href="#">Marketing</a></div>
                <div><a href="#">Creative</a></div>
                <div><a href="#">Professional Services</a></div>
            </div>
            <div class="dropdown_menu_solution_2">
                <h3>Use Case</h3>
                <div><a href="#">Enter Prise Project Management</a></div>
                <div><a href="#">Agency Project Management</a></div>
                <div><a href="#">Agile Project Management</a></div>
                <div><a href="#">Project Portfolio Management</a></div>
                <div><a href="#">Resource Management</a></div>
                <div><a href="#">Working From Anywhere</a></div>
            </div>
        </div>
    </div>

    <div>Pricing</div>

    <!-- div---4 -->
    <div id="resource_drop">Resource <i class="fas fa-caret-down" style="margin-left:8px ;"></i>
        <div class="dropdown_menu_resource">
            <div class="dropdown_menu_resource_1">
                <h3>LEARN MORE</h3>
                <div><a href="#">Resources</a></div>
                <div><a href="#">Wrike blog</a></div>
                <div><a href="#">Webinars</a></div>
                <div><a href="#">Customer stories</a></div>
            </div>
            <div class="dropdown_menu_resource_2">
                <h3>ABOUT</h3>
                <div><a href="#">Partners</a></div>
                <div><a href="#">Company</a></div>
                <div><a href="#">Careers</a></div>
                <div><a href="#">Newsroom</a></div>


            </div>
            <div class="dropdown_menu_resource_3">
                <h3>SUPPORT</h3>
                <div><a href="#">Professional Services</a></div>
                <div><a href="#">Help Center</a></div>
                <div><a href="#">Community</a></div>
                <div><a href="#">Support Packages</a></div>
            </div>

        </div>
    </div>

</div>
<div id="nav_div_2">
    <div>Contact Sales</div>
    <div style="color: #08cf65 ;">Log in </div>
    <div><button>Start for free</button></div>
</div>

<!-------------Responsive media middle -  -->

<div id="nav_responsive">
    <div id="nav_image">
        <div id="wrike_img">
            <a href="index.html"> <svg _ngcontent-TP_FE-c90="" width="128" height="35" viewBox="0 0 128 35"
                    fill="none" xmlns="http://www.w3.org/2000/svg" class="header-logo__image">
                    <g _ngcontent-TP_FE-c90="" clip-path="url(#clip0)">
                        <path _ngcontent-TP_FE-c90=""
                            d="M49.06 32.17c1.05 0 1.54-.76 1.54-.76v.66h.71v-3.04c0-1.05-.81-1.86-1.89-1.86-1.15 0-1.8.9-1.8.9l.44.44s.5-.71 1.34-.71c.7 0 1.2.5 1.2 1.2l-1.86.3c-.89.15-1.38.65-1.38 1.43.02.74.7 1.44 1.7 1.44zm0-.65c-.66 0-1-.34-1-.76 0-.45.3-.73.9-.84l1.64-.29v.3c.03.93-.63 1.59-1.54 1.59zM58.4 32.17c1.9 0 2.91-1.44 2.91-1.44l-.5-.44s-.8 1.2-2.4 1.2a2.84 2.84 0 01-2.86-2.9 2.88 2.88 0 015.21-1.7l.5-.45S60.32 25 58.41 25c-2 0-3.6 1.6-3.6 3.59 0 1.99 1.6 3.58 3.6 3.58zM62.5 32.07h.7v-4.8h-.7v4.8zm.36-5.95c.26 0 .45-.2.45-.44a.46.46 0 00-.45-.45.46.46 0 00-.45.45c0 .23.19.44.45.44zM66.53 32.17c.36 0 .68-.15.68-.15v-.66s-.29.16-.66.16c-.39 0-.65-.26-.65-.76V27.9h1.05v-.65H65.9v-1.6h-.66v1.1c0 .34-.15.5-.39.5h-.55v.65h.9v2.86c0 .92.49 1.41 1.33 1.41zM68.41 32.07h.71v-2.65c0-.94.7-1.54 1.5-1.54h.28v-.7h-.2c-1.1 0-1.6.75-1.6.75v-.65h-.71v4.79h.02zM71.85 32.07h.7v-4.8h-.7v4.8zm.34-5.95c.26 0 .44-.2.44-.44s-.2-.45-.44-.45a.46.46 0 00-.45.45c0 .23.21.44.45.44zM73.5 32.07h.83l1.4-1.94 1.38 1.94h.84l-1.81-2.49 1.65-2.3H77l-1.25 1.75-1.26-1.75h-.84l1.65 2.3-1.8 2.49zM82.9 32.17c1.26 0 1.99-1 1.99-1l-.5-.44s-.55.82-1.5.82c-.88 0-1.7-.82-1.7-1.86 0-1.05.82-1.86 1.7-1.86.95 0 1.45.8 1.45.8l.5-.49s-.71-.94-1.94-.94a2.45 2.45 0 00-2.41 2.49c0 1.38 1.1 2.48 2.4 2.48zM87.98 32.17c1.33 0 2.43-1.1 2.43-2.48 0-1.4-1.1-2.5-2.43-2.5a2.46 2.46 0 00-2.44 2.5c0 1.38 1.1 2.48 2.44 2.48zm0-.65c-.94 0-1.76-.81-1.76-1.86s.82-1.86 1.76-1.86c.94 0 1.75.81 1.75 1.86s-.78 1.86-1.75 1.86zM91.7 32.07h.7v-2.65c0-1 .6-1.6 1.31-1.6.71 0 1.2.5 1.2 1.4v2.85h.72v-2.65c0-1 .6-1.6 1.3-1.6.71 0 1.21.5 1.21 1.4v2.85h.7v-2.86c0-1.33-.8-2.04-1.85-2.04-1.2 0-1.65.84-1.65.84s-.4-.84-1.55-.84c-.94 0-1.33.7-1.33.7v-.6h-.71v4.8h-.05zM100.37 34.17h.7v-2.8s.55.8 1.65.8c1.31 0 2.36-1.04 2.36-2.48s-1.05-2.5-2.36-2.5c-1.1 0-1.65.82-1.65.82v-.7h-.7v6.86zm2.35-2.65c-.83 0-1.65-.81-1.65-1.86s.82-1.86 1.65-1.86c.9 0 1.66.76 1.66 1.86 0 1.13-.77 1.86-1.66 1.86zM107.67 32.17a1.9 1.9 0 001.55-.76v.66h.7v-3.04c0-1.05-.8-1.86-1.88-1.86-1.15 0-1.8.9-1.8.9l.44.44s.5-.71 1.33-.71c.71 0 1.2.5 1.2 1.2l-1.85.3c-.9.15-1.39.65-1.39 1.43 0 .74.7 1.44 1.7 1.44zm0-.65c-.65 0-1-.34-1-.76 0-.45.3-.73.9-.84l1.65-.29v.3c0 .93-.66 1.59-1.55 1.59zM111.5 32.07h.7v-2.65c0-.94.66-1.6 1.5-1.6.76 0 1.31.56 1.31 1.4v2.85h.7v-2.86c0-1.25-.8-2.04-1.93-2.04-1.05 0-1.55.81-1.55.81v-.7h-.7v4.79h-.03zM117.44 34.17c.71 0 1.1-.4 1.5-1.4l2.2-5.5h-.76l-1.55 3.9-1.54-3.9h-.73l1.93 4.8-.26.7c-.18.5-.44.77-.89.77-.26 0-.5-.1-.5-.1v.65c.03 0 .27.08.6.08z"
                            fill="#2B3857" class="header-logo__svg-path header-logo__svg-path--logo-copy">
                        </path>
                        <path _ngcontent-TP_FE-c90=""
                            d="M77.82 21.8v-6.26c0-3.77 3.27-3.72 5-3.43V7.87c-2.72-.24-4.35.52-5.1 2.04h-.09l.03-1.96h-3.8V21.8h3.96zM94.37 21.8h2.46l4.09-5.24 3.45 5.24h4.59l-5.42-8.04 4.74-5.84h-4.59l-5.42 6.97h-.08L98.25.98h-3.88V21.8zM49.76 21.8h3.07l4.69-8.93 4.53 8.93h3.09L72.1 7.92H67.5l-4.27 8.85-4.06-8.85h-3.33l-4.27 8.9-4.06-8.9h-4.6l6.85 13.88zM88.08 5.93c1.34 0 2.44-1.1 2.44-2.46 0-1.36-1.1-2.46-2.44-2.46a2.45 2.45 0 00-2.43 2.46c0 1.36 1.1 2.46 2.43 2.46zM90.05 7.92h-3.9V21.8h3.9V7.92zM120.04 17.2a3.62 3.62 0 01-3.15 1.62c-1.96 0-3.35-1.16-3.64-2.8h10.61v-1.1c0-4.01-2.83-7.24-7.05-7.24a7.18 7.18 0 00-7.3 7.23 7.15 7.15 0 007.3 7.23c3.12 0 5-1.25 6.24-2.88l-3.01-2.07zm-3.46-6.42c1.8 0 3.06 1.02 3.48 2.46h-7.02a3.52 3.52 0 013.54-2.46z"
                            fill="#000" class="header-logo__svg-path header-logo__svg-path--logo-copy"></path>
                        <path _ngcontent-TP_FE-c90=""
                            d="M9.14 9.1c1.89 0 2.78.34 4.14 1.75l7.33 7.47c.21.2.27.31.32.44.02.06.02.1.02.16 0 .05 0 .1-.02.16-.05.13-.08.2-.32.44l-5 5.11c-.2.21-.31.26-.44.32-.06.02-.11.02-.16.02s-.1 0-.16-.02c-.13-.06-.2-.08-.44-.32L.24 10.17c-.42-.42-.27-1.04.44-1.04h8.46V9.1zM29.83-.02c-1.88 0-2.77.34-4.14 1.76L18.36 9.2c-.2.21-.26.32-.31.45-.03.05-.03.1-.03.16 0 .05 0 .1.03.15.05.13.07.21.31.45l5 5.1c.21.22.32.27.45.32.05.03.1.03.16.03.05 0 .1 0 .15-.03.13-.05.21-.08.45-.31l14.2-14.49c.41-.42.26-1.05-.45-1.05h-8.49z"
                            fill="#08CF65" class="header-logo__svg-path"></path>
                        <path _ngcontent-TP_FE-c90=""
                            d="M125.93 7.9a2.01 2.01 0 100-4.04 2.01 2.01 0 100 4.03zm0-.37c-.89 0-1.62-.74-1.62-1.63 0-.89.73-1.62 1.62-1.62.9 0 1.62.73 1.62 1.62 0 .9-.73 1.63-1.62 1.63zm-.73-.6h.42v-.74h.39l.4.73h.44l-.47-.83s.39-.13.39-.55c0-.37-.32-.68-.73-.68h-.84v2.06zm.42-1.1v-.56h.41c.19 0 .32.1.32.3 0 .15-.1.28-.31.28h-.42v-.03z"
                            fill="#000" class="header-logo__svg-path header-logo__svg-path--logo-copy"></path>
                    </g>
                    <defs _ngcontent-TP_FE-c90="">
                        <clipPath _ngcontent-TP_FE-c90="" id="clip0">
                            <path _ngcontent-TP_FE-c90="" fill="#fff" d="M0 0h128v35H0z"
                                class="header-logo__svg-path header-logo__svg-path--logo-copy"></path>
                        </clipPath>
                    </defs>
                </svg></a>
        </div>
    </div>

    <div id="nav_button_responsive">
        <div>
            <i class="fas fa-bars" style="color:white ;" id="responsive_menu_button"
                onclick="main_menu_button()"></i>
            <!-- <i class="fa-solid fa-xmark" id="responsive_menu_cutter"></i> -->
        </div>

        <div id="menu_all_detail">
            <div id="product_drop"><a href="#">Product</a><i class="fas fa-caret-down"
                    style="margin-left:8px ;"></i>

                <hr class="rule">

                <!-- <div class="dropdown_menu_Product">
                    <div><a href="#">Take a tour</a> </div>
                    <div><a href="#">Features</a></div>
                    <div><a href="#">Project Templates</a></div>
                    <div><a href="#">Apps & Integration</a></div>
                </div> -->
            </div>
            <!-- </div> -->

            <!-- div---2  -->

            <div id="solution_drop"><a href="#">Solutions</a> <i class="fas fa-caret-down"
                    style="margin-left:8px ;"></i>
                <hr class="rule">
                <!-- <div class="dropdown_menu_solution">
                    <div class="dropdown_menu_solution_1">
                        <h3>Teams</h3>
                        <div><a href="#">Project Manager</a></div>
                        <div><a href="#">Marketing</a></div>
                        <div><a href="#">Creative</a></div>
                        <div><a href="#">Professional Services</a></div>
                    </div>
                    <div class="dropdown_menu_solution_2">
                        <h3>Use Case</h3>
                        <div><a href="#">Enter Prise Project Management</a></div>
                        <div><a href="#">Agency Project Management</a></div>
                        <div><a href="#">Agile Project Management</a></div>
                        <div><a href="#">Project Portfolio Management</a></div>
                        <div><a href="#">Resource Management</a></div>
                        <div><a href="#">Working From Anywhere</a></div>
                    </div>
                </div> -->
            </div>

            <div id="price_drop"><a href="#">Pricing</a></div>
            <hr class="rule">

            <!-- div---4 -->
            <div id="resource_drop"><a href="#">Resource</a> <i class="fas fa-caret-down"
                    style="margin-left:8px ;"></i>
                <hr class="rule">
                <!-- <div class="dropdown_menu_resource">
                    <div class="dropdown_menu_resource_1">
                        <h3>LEARN MORE</h3>
                        <div><a href="#">Resources</a></div>
                        <div><a href="#">Wrike blog</a></div>
                        <div><a href="#">Webinars</a></div>
                        <div><a href="#">Customer stories</a></div>
                    </div>
                    <div class="dropdown_menu_resource_2">
                        <h3>ABOUT</h3>
                        <div><a href="#">Partners</a></div>
                        <div><a href="#">Company</a></div>
                        <div><a href="#">Careers</a></div>
                        <div><a href="#">Newsroom</a></div>
                       

                    </div>
                    <div class="dropdown_menu_resource_3">
                        <h3>SUPPORT</h3>
                        <div><a href="#">Professional Services</a></div>
                        <div><a href="#">Help Center</a></div>
                        <div><a href="#">Community</a></div>
                        <div><a href="#">Support Packages</a></div>
                    </div>
                    
                </div> -->
            </div>

            <!-- Input tag  -->

            <!-- <div id="main_home_input"> -->
            <div id="input_responsive">
                <input type="text" name="" id="input_business_email" placeholder="Business Email">
                <button>Try For Free</button>
            </div>


            <div id="contact_responsive">
                <div>Contact Sales</div>
                <div>Log In</div>
            </div>



            <!-- </div> -->


        </div>
    </div>


</div>`
}

export default home_nav_copy_import ;