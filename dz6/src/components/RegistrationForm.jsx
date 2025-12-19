import { Controller, useForm } from 'react-hook-form';
import { Form, Input, Button } from 'antd';
import { toast } from 'react-toastify';

const RegistrationForm = () => {
  const { control, handleSubmit, watch } = useForm();
  const password = watch('password');

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Пароли не совпадают');
      return;
    }
    toast.success('Регистрация успешна!');
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: '0 auto' }}>
      <Controller
        name="name"
        control={control}
        rules={{ required: 'Имя обязательно', pattern: { value: /^[a-zA-Z\s]+$/, message: 'Только буквы и пробелы' } }}
        render={({ field, fieldState }) => (
          <Form.Item label="Имя" validateStatus={fieldState.error ? 'error' : ''} help={fieldState.error?.message}>
            <Input {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{ required: 'Email обязателен', pattern: { value: /^\S+@\S+$/i, message: 'Неверный email' } }}
        render={({ field, fieldState }) => (
          <Form.Item label="Email" validateStatus={fieldState.error ? 'error' : ''} help={fieldState.error?.message}>
            <Input {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: 'Пароль обязателен', minLength: { value: 6, message: 'Минимум 6 символов' } }}
        render={({ field, fieldState }) => (
          <Form.Item label="Пароль" validateStatus={fieldState.error ? 'error' : ''} help={fieldState.error?.message}>
            <Input.Password {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{ required: 'Подтверждение обязательно', validate: value => value === password || 'Пароли не совпадают' }}
        render={({ field, fieldState }) => (
          <Form.Item label="Подтверждение пароля" validateStatus={fieldState.error ? 'error' : ''} help={fieldState.error?.message}>
            <Input.Password {...field} />
          </Form.Item>
        )}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;