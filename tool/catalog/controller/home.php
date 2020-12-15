<?php 
	class HomeController extends Controller {
	    public function index() {
	    	$data = array(); 
	    	$this->view('home');
	    }
	    public function login(){
	    	$data = array();
	    	// echo MD5('AdminFsp!');exit();
	    	if(method_post()){
	    		$admin = $this->model('admin');
	    		$data_login = array(
	    			'admin_user'		=> post('user'),
					'admin_password'	=> post('password'),
	    		);
	    		$result_login = $admin->login($data_login);
	    		if($result_login['result']=='success'){
	    			$this->setSession('id_admin',$result_login['detail']['id_admin']);
	    			redirect('home');
	    		}else{
	    			redirect('home/login&result=fail');
	    		}
	    	}
	    	$data['action'] = route('home/login');
	    	$this->render('login',$data);
	    }
	    public function logout(){
	    	$this->rmSession('id_admin');
	    	redirect('home/login');
	    }
	}
?>