<template>
	<aside class="left-side sidebar-offcanvas">
                <!-- sidebar: style can be found in sidebar.less -->
                <section class="sidebar">
                    <!-- Sidebar user panel -->
                    <userPanel/>
                    <!-- search form -->
                    <sideBarForm/>
                    <!-- /.search form -->
                    <!-- sidebar menu: : style can be found in sidebar.less -->
                    <sideBarMenu/>
                </section>
                <!-- /.sidebar -->
            </aside>
</template>
<script type="text/javascript">
import userPanel from './leftAside/userPanel'
import sideBarForm from './leftAside/sideBarForm'
import sideBarMenu from './leftAside/sideBarMenu'
	export default{
		name : 'vAsideLeft',
		components : {
			userPanel,
			sideBarForm,
			sideBarMenu
		}
	}
</script>