import { useState } from 'react';
import { Avatar, Form, Button, List, Input, Upload, message, Image } from 'antd';
import {useLocation} from 'react-router-dom';
import { PlusOutlined, SendOutlined } from '@ant-design/icons';
import CustomComment from '../components/CustomComment';
import TableComponent from '../components/Table';
const { TextArea } = Input;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const CommentSection = () => {
    const location = useLocation();
    const [comments, setComments] = useState([]);
    const [value, setValue] = useState('');
    const [fileList, setFileList] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const handleSubmit = () => {
        if (!value) {
            message.warning('Please enter a comment!');
            return;
        }

        const newComment = {
            author: 'Micheal Johne', // Replace with actual user name
            content: value,
            datetime: new Date().toLocaleDateString(),
            file: fileList[0] || null,
        };

        setComments([...comments, newComment]);
        setValue('');
        setFileList([]);
    };

    const handleFileChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    return (
        <div>
          { location?.state&& <TableComponent data={location?.state}/>}
            <div style={{ display: 'flex', marginTop: 16 }}>
                <Avatar className='!bg-[#f56a00]'>MJ</Avatar>
                <div className='!ml-8 !flex-1'>
                    <Form.Item>
                        <div style={{ position: 'relative', width: '100%' }}>
                            <TextArea
                                rows={4}
                                onChange={(e) => setValue(e.target.value)}
                                value={value}
                                placeholder="Write a comment..."
                                autoSize={{ minRows: 3, maxRows: 6 }}
                                style={{ paddingRight: 80 }} // Add padding to avoid text overlapping with the button
                            />
                            <Button
                                type="primary"
                                icon={<SendOutlined />}
                                onClick={handleSubmit}
                                style={{
                                    position: 'absolute',
                                    right: 12,
                                    bottom: 12,
                                    zIndex: 1,
                                }}
                            >
                                Post
                            </Button>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleFileChange}
                            beforeUpload={() => false} // Prevent automatic upload
                            multiple
                            maxCount={4}
                        >
                            {fileList.length >= 5 ? null : uploadButton}
                        </Upload>
                    </Form.Item>
                </div>
            </div>

            <div className='bg-white rounded-sm !ml-2 px-3 py-1.5 overflow-auto h-[500px]'>
                <List
                    dataSource={comments}
                    header={`${comments.length} ${comments.length > 1 ? 'comments' : 'comment'}`}
                    itemLayout="horizontal"
                    renderItem={(item) => <CustomComment {...item} />}
                />
            </div>

            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </div>
    );
};

export default CommentSection;