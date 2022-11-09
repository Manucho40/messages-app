import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';


const ModalWindow = () => {
    const [open, setOpen] = useState(false);
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };


    return ( 
        <>
            <div>
                <Button className='m-10' type="default" onClick={() => setOpen(true)}>
                    New Message
                </Button>
            </div>
            <Modal
                    title="Modal 1000px width"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={900}
                    footer={null}
            >
    <Form
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'Message']} label="Message" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Enregistrer
        </Button>
      </Form.Item>
    </Form>          
    
 </Modal>
        </>
     );
}
 
export default ModalWindow;