<template>
	<section class="right-wrap">
		<el-breadcrumb separator-class="el-icon-arrow-right" class='breadcrumb'>
			<el-breadcrumb-item>用户管理</el-breadcrumb-item>
			<el-breadcrumb-item>用户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<section class="right-main">
			<section class="tools">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item>
						<el-input v-model="formInline.user" placeholder="输入角色查询"></el-input>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</el-form-item>
					<section class="fr">
						<el-form-item>
							<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
					</section>
				</el-form>
			</section>
			<section >
				<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" stripe style="width: 100%" @selection-change="handleSelectionChange" header-cell-class-name="top-bar" >
					<el-table-column type="selection" width="55" align="center" >
					</el-table-column>
					<el-table-column prop="roleName" label="角色名称">
						<!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
					</el-table-column>
					<el-table-column prop="name" label="姓名">
					</el-table-column>
					<el-table-column prop="sex" label="性别">
					</el-table-column>
					<el-table-column prop="role" label="角色">
					</el-table-column>
					<el-table-column prop="position" label="职位">
					</el-table-column>
					<el-table-column prop="username" label="登录用户名">
					</el-table-column>
					<el-table-column prop="role" label="密码">
					</el-table-column>
				</el-table>
				<div style="margin-top: 20px">
					<el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
					<el-button @click="toggleSelection()">取消选择</el-button>
				</div>
			</section>
		</section>

	</section>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: ''
				},
				tableData3: [],
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		},
		mounted() {
			this.axios.get("/api/userList").then((res) => {
				this.tableData3 = res.data.userList;
				console.log(this.tableData3)
			}, (err) => {
				console.log(err)
			})
		}
	}
</script>

<style>
	.breadcrumb {
		font-size: 16px;
		padding: 38px 0 10px 22px;
	}
	.fr{float: right;}
	.tools {}
	
	.tools button {
		width: 100px;
	}
	
	.right-wrap {
		background: #EEF5FD;
		height: 100%;
	}
	.right-main{background-color: #fff;height: 100%;margin: 0 0 0 20px;padding: 20px 0 0 5px;}
	.top-bar{background-color: #B9D8FC;padding: 0 0 0 10px;}
</style>