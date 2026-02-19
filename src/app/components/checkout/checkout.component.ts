import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
    checkoutForm: FormGroup;

    constructor(private fb: FormBuilder, private orderService: OrderService) {
        this.checkoutForm = this.fb.group({
            shippingAddress: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.checkoutForm.valid) {
            this.orderService.createOrder(this.checkoutForm.value).subscribe(response => {
                // Handle successful order creation
            });
        }
    }
}