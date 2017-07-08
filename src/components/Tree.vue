<template>
	<div class="item">
		<div class="title" v-on:click="member.expanded=!member.expanded">
			<div class="panel panel-info">
			  <div class="panel-body">
			  	<div>
			  		<span>{{member.name}}</span>
					<span v-if="member.children.length > 0" class="glyphicon" v-bind:class="[member.expanded ? 'glyphicon-minus':'glyphicon-plus']"></span>
			  	</div>
			  </div>
			</div>
		</div>
		<transition name="fade">
		  	<div v-show="member.expanded">
					<div v-for="child in member.children">
						<tree v-bind:member="child"></tree>
					</div>
			</div>
        </transition>
	</div>
</template>

<script>

export default {
	name: 'tree',
	props: ['member'],
	data () {
		return {};
	}
}
	
</script>

<style scoped>
	.item{
		margin-left: 50px;
		user-select: none;
	}
	.panel-body > div {
		float: left;
	}
	.fade-enter-active, .fade-leave-active {
		  transition: opacity .1s;
	}
	.fade-enter, .fade-leave-to {
	  opacity: 0;
	}
</style>