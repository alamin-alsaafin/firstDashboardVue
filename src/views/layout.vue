<template>
	<div>
		<!-- header logo: style can be found in header.less -->
        <v-header ></v-header>
        <div class="wrapper row-offcanvas row-offcanvas-left">
        	<!-- Left side column. contains the logo and sidebar -->	
        	<vAsideLeft/>
        	<!-- Right side column. Contains the navbar and content of the page -->
            <vAsideRight/>
        </div><!-- ./wrapper -->

        <!-- add new calendar event modal -->
	</div>
</template>

<script type="text/javascript">
import vHeader from './partials/vHeader'
import vAsideRight from './partials/vAsideRight'
import vAsideLeft from './partials/vAsideLeft'
	export default{
		name : 'layout',
		components : {
			 vHeader,
			 vAsideRight,
			 vAsideLeft
		}
	}
</script>

<style type="text/css">

	@import "../assets/css/bootstrap.min.css";
	@import "../assets/css/font-awesome.min.css";
	@import "../assets/css/ionicons.min.css";
	@import "../assets/css/morris/morris.css";
	@import "../assets/css/jvectormap/jquery-jvectormap-1.2.2.css";
	@import "../assets/css/fullcalendar/fullcalendar.css";
	@import "../assets/css/daterangepicker/daterangepicker-bs3.css";
	@import "../assets/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css";
	@import "../assets/css/AdminLTE.css";

</style>